<template>
  <section id="hero">
    <v-row no-gutters>
      <v-img
        max-height="1100"
        src="../assets/heroimage.jpg"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row
              align="center"
              class="white--text mx-auto"
              justify="center"
            >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-thin"
                >
                  Gestantes x Coronavírus
                </span>
              </v-col>

              <v-btn
                @click="$vuetify.goTo('#about-me')"
                class="align-self-end"
                fab
                outlined
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'HeroImage'
  }
</script>

<style scoped>

</style>
