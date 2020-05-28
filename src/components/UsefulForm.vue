<template>
  <v-row justify="center">
    <v-dialog max-width="290" persistent v-model="dialog">
      <v-card v-if="!loading">
        <v-card-title class="headline">Essas informações foram úteis para você ?</v-card-title>
        <v-card-text>
          <v-radio-group column v-model="radio">
            <v-radio @click="send('sim')" label="Sim" value="sim"></v-radio>
            <v-radio @click="send('nao')" label="Não" value="nao"></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-card>
      <v-card class="text--disabled" height="223" v-else>
        <v-container fill-height>
          <v-row align="center" justify="center">
            <v-col class="text-center">
              <v-progress-circular
                color="primary"
                indeterminate
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
      send(useful) {
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
