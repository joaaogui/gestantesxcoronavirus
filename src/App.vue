<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>
  import HeroImage from './components/HeroImage'
  import CovidDefinition from './components/CovidDefinition'
  import PregnancyRisks from './components/PregnancyRisks'
  import Transmission from './components/Transmission'
  import Prevention from './components/Prevention'
  import AboutUs from './components/AboutUs'
  import TypeUserForm from './components/TypeUserForm'
  import UsefulForm from './components/UsefulForm'

  export default {
    name: 'App',
    mounted () {
      console.log(this.$vuetify.breakpoint.name)
    }
  }
</script>

<style lang="scss">
</style>
