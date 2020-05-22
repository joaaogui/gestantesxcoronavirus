<template>
  <v-app>
    <!--    <AppBar/>-->
    <v-content>
      <TypeUserForm v-if="showTypeUserDialog"/>
      <UsefulForm v-if="showUsefulDialog"/>
      <HeroImage/>
      <CovidDefinition/>
      <PregnancyRisks/>
      <Transmission/>
      <Prevention/>
      <AboutUs v-observe-visibility="visibilityChanged"/>
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
  import UsefulForm from '@/components/UsefulForm'

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
      TypeUserForm,
      UsefulForm
    },
    data: () => ({
      typeUserDialog: true,
      usefulDialog: false,
      isVisible: null
    }),
    computed: {
      showTypeUserDialog () {
        return this.typeUserDialog && !localStorage.getItem('typeUser')
      },
      showUsefulDialog () {
        return this.usefulDialog && !localStorage.getItem('useful')
      }
    },
    methods: {
      visibilityChanged (isVisible, entry) {
        this.isVisible = isVisible
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
          this.usefulDialog = true
        }
      }
    }
  }
</script>
