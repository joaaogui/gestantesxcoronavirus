<template>
  <v-content>
    <TypeUserForm v-if="showTypeUserDialog"/>
    <UsefulForm v-if="showUsefulDialog"/>
    <HeroImage/>
    <CovidDefinition/>
    <PregnancyRisks/>
    <Transmission/>
    <Prevention/>
    <AboutUs v-intersect="onIntersect"/>
  </v-content>
</template>

<script>
  import HeroImage from '@/components/HeroImage'
  import CovidDefinition from '@/components/CovidDefinition'
  import PregnancyRisks from '@/components/PregnancyRisks'
  import Transmission from '@/components/Transmission'
  import Prevention from '@/components/Prevention'
  import AboutUs from '@/components/AboutUs'
  import TypeUserForm from '@/components/TypeUserForm'
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
      TypeUserForm,
      UsefulForm
    },
    data: () => ({
      typeUserDialog: true,
      usefulDialog: false,
      isIntersecting: false
    }),
    computed: {
      showTypeUserDialog() {
        return this.typeUserDialog && !localStorage.getItem('typeUser')
      },
      showUsefulDialog() {
        return this.usefulDialog && !localStorage.getItem('useful')
      }
    },
    mounted() {
      console.log(this.$vuetify.breakpoint.name)
    },
    methods: {
      onIntersect(entries, observer) {
        this.usefulDialog = entries[0].isIntersecting
      }
    }
  }
</script>

<style lang="scss">
  /*#app {*/
  /*  text-align: justify;*/
  /*  text-justify: inter-word;*/
  /*}*/
</style>
