<template>
  <section id="about-me">
    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Sobre Nós</h2>
      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        Torus ires, tanquam audax mens. Nunquam gratia accola. Cur vita tolerare? A falsis, castor regius calcaria. Sunt
        buboes acquirere camerarius, fortis mortemes. Neuter magister velox demittos pulchritudine est. Sunt terrores
        anhelare clemens, secundus seculaes. Secundus accolas ducunt ad caesium. Omnias sunt deuss de dexter capio.
        Adiurators resistere! Est castus luna, cesaris. Cur orgia accelerare? Ubi est nobilis pars? Cur homo trabem?
        Nobilis, fatalis capios velox aperto de azureus, bi-color exemplar.
      </v-responsive>

      <v-avatar
        class="elevation-12 mb-12 ml-12"
        size="128"
        v-for="index in 10" :key="index"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
      </v-avatar>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'AboutUs'
  }
</script>

<style scoped>

</style>
