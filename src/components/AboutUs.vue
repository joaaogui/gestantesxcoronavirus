<template>
  <section id="about-me">
    <v-container class="text-center">
      <h2 class="display-2 font-weight-light my-8">Sobre Nós</h2>
      <div class="title font-weight-light">
        Somos Acadêmicos do Curso de Medicina da Faculdade UniRV - Campus Formosa. Atualmente, estamos cursando o
        segundo período. Diante da pandemia causada pelo COVID-19, decidimos contribuir com informações seguras sobre o
        risco de se contrair coronavírus quando se está grávida. Esperamos, dessa forma, auxiliar a população e
        esclarecer as dúvidas mais frequentes sobre o presente assunto.
      </div>
    </v-container>
    <div class="text-center mt-8">
      <v-avatar
        class="text-center elevation-12 ma-3"
        size="128"
        v-for="(pic, index) in pictures" :key="index"
      >
        <v-img :src="require(`../assets/pictures/pic_${index + 1}.jpeg`)"></v-img>
      </v-avatar>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AboutUs',
    data: () => ({
      pictures: [
        '@/assets/pictures/pic_1.jpeg',
        '../assets/pictures/pic_2.jpeg',
        '../assets/pictures/pic_3.jpeg',
        '../assets/pictures/pic_4.jpeg',
        '../assets/pictures/pic_5.jpeg',
        '../assets/pictures/pic_6.jpeg',
        '../assets/pictures/pic_7.jpeg',
        '../assets/pictures/pic_8.jpeg'
      ]
    })
  }
</script>

<style scoped>

</style>
