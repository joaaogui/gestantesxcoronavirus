<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card v-if="!loading">
        <v-card-title class="headline">Você é:</v-card-title>
        <v-card-text>
          <v-radio-group v-model="radio" column>
            <v-radio label="Gestante" value="gestante" @click="send('gestante')"></v-radio>
            <v-radio label="Profissional da saúde ou estudante" value="saude" @click="send('saude')"></v-radio>
            <v-radio label="Outro" value="outro" @click="send('outro')"></v-radio>
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
    name: 'TypeUserForm',
    data: () => ({
      dialog: true,
      radio: null,
      loading: false
    }),
    methods: {
      send (typeUser) {
        this.radio = typeUser
        this.loading = true
        const user = {
          typeUser: typeUser
        }
        db.collection('typeUser').add(user).then(() => {
          this.dialog = false
        })
      }
    }
  }
</script>

<style scoped>

</style>
