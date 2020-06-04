<template>
  <v-content>
    <v-row align="center"
           justify="center" no-gutters>
      <v-container class="text-left">
        <h2 class="display-2 font-weight-light my-8">Acessos Totais: {{this.allUsers}}</h2>
        <h2 class="display-1 font-weight-light my-8">Gestantes: {{this.typeUserData.gestante}}</h2>
        <h2 class="display-1 font-weight-light my-8">Profissional da saúde ou estudante:
          {{this.typeUserData.saude}}</h2>
        <h2 class="display-1 font-weight-light my-8">Outros: {{this.typeUserData.outro}}</h2>
      </v-container>
    </v-row>
    <v-row align="center"
           justify="center" no-gutters>
      <v-container class="text-left">
        <h2 class="display-1 font-weight-light my-8">Útil: {{this.usefulData.sim}}</h2>
        <h2 class="display-1 font-weight-light my-8">Inútil: {{this.usefulData.nao}}</h2>
      </v-container>
    </v-row>
  </v-content>
</template>

<script>
  import db from '@/firebase'

  export default {
    name: "Metrics",
    data: () => ({
      typeUserData: {
        gestante: 0,
        saude: 0,
        outro: 0
      },
      usefulData: {
        sim: 0,
        nao: 0
      },
      allUsers: 0
    }),
    mounted() {
      const typeUser = db.collection('typeUser')
      typeUser.get()
        .then(snapshot => {
          this.allUsers = snapshot.docs.length
          snapshot.forEach(doc => {
            if (doc.data().typeUser === 'gestante') {
              this.typeUserData.gestante += 1
            } else if (doc.data().typeUser === 'saude') {
              this.typeUserData.saude += 1
            } else if (doc.data().typeUser === 'outro') {
              this.typeUserData.outro += 1
            }
          })
        })

      const usefulForm = db.collection('useful')
      usefulForm.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data().useful)
            if (doc.data().useful === 'sim') {
              this.usefulData.sim += 1
            } else if (doc.data().useful === 'nao') {
              this.usefulData.nao += 1
            }
          })
        })
    }
  }
</script>

<style scoped>

</style>
