<template>
  <v-app>
    <!--    <AppBar/>-->
    <v-content>
      <TypeUserForm v-if="typeUserDialog"/>
      <HeroImage/>
      <CovidDefinition/>
      <PregnancyRisks/>
      <Transmission/>
      <Prevention/>
      <AboutUs/>
    </v-content>
  </v-app>
</template>

<script>
  import HeroImage from './components/HeroImage'
  import CovidDefinition from './components/CovidDefinition'
  import PregnancyRisks from './components/PregnancyRisks'
  import Transmission from './components/Transmission'
  import Prevention from './components/Prevention'
  import AboutUs from './components/AboutUs'
  import AppBar from './components/AppBar'
  import TypeUserForm from './components/TypeUserForm'

  export default {
    name: 'App',

    components: {
      Transmission,
      HeroImage,
      CovidDefinition,
      PregnancyRisks,
      Prevention,
      AboutUs,
      AppBar,
      TypeUserForm
    },
    data: () => ({
      typeUserDialog: true,
      utilDialog: false
    }),
    mounted () {

    }
  }
</script>
