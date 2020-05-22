<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card v-if="!loading">
        <v-card-title class="headline">Essas informações foram úteis para você ?</v-card-title>
        <v-card-text>
          <v-radio-group v-model="radio" column>
            <v-radio label="Sim" value="sim" @click="send('sim')"></v-radio>
            <v-radio label="Não" value="nao" @click="send('nao')"></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-card>
      <v-card v-else class="text--disabled" height="223">
        <v-container fill-height>
          <v-row justify="center" align="center">
            <v-col class="text-center">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import db from '@/firebase'

  export default {
    name: 'UsefulForm',
    data: () => ({
      dialog: true,
      radio: null,
      loading: false
    }),
    methods: {
      send (useful) {
        this.radio = useful
        this.loading = true
        const usefulObj = {
          useful: useful
        }
        db.collection('useful').add(usefulObj).then(() => {
          this.dialog = false
          localStorage.setItem('useful', useful)
        })
      }
    }
  }
</script>

<style scoped>

</style>
