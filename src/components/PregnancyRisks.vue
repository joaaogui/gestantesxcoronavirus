<template>
  <section
    id="features"
    class="grey lighten-3 pt-6"
  >
    <v-container class="text-center">
      <h2 class="display-2 font-weight-light mb-3 text--secondary">Porque o COVID-19 é um risco para as gestantes ?</h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="py-12 px-4"
            color="grey lighten-5"
            flat
          >
            <v-theme-provider dark>
              <div>
                <v-avatar
                  color="primary"
                  size="88"
                >
                  <v-icon
                    large
                  >mdi-check</v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase"
            >Adelphiss tolerare!
            </v-card-title>

            <v-card-text
              class="subtitle-1"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum
              excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores
              nam
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12"
               md="6">
          <iframe width="560" height="400"
                  src="https://www.youtube.com/embed/RH_V2rtFqYM?autoplay=1&controls=1&fs=0&loop=1&playlist=RH_V2rtFqYM&modestbranding=1"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
        </v-col>
      </v-row>
    </v-container>

    <div class=" py-12
          "></div>
  </section>
</template>

<script>
  export default {
    name: 'PregnancyRisks',
    data: () => ({
    })
  }
</script>

<style scoped>

</style>
