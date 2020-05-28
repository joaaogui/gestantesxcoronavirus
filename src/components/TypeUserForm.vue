<template>
  <v-row justify="center">
    <v-dialog max-width="290" persistent v-model="dialog">
      <v-card v-if="!loading">
        <v-card-title class="headline">Você é:</v-card-title>
        <v-card-text>
          <v-radio-group column v-model="radio">
            <v-radio @click="send('gestante')" label="Gestante" value="gestante"></v-radio>
            <v-radio @click="send('saude')" label="Profissional da saúde ou estudante" value="saude"></v-radio>
            <v-radio @click="send('outro')" label="Outro" value="outro"></v-radio>
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
    name: 'TypeUserForm',
    data: () => ({
      dialog: true,
      radio: null,
      loading: false
    }),
    methods: {
      send(typeUser) {
        this.radio = typeUser
        this.loading = true
        const user = {
          typeUser: typeUser
        }
        db.collection('typeUser').add(user).then(() => {
          this.dialog = false
          localStorage.setItem('typeUser', typeUser)
        })
      }
    }
  }
</script>

<style scoped>

</style>
