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
                  >mdi-check
                  </v-icon>
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
              Há dados limitados sobre a doença de corona vírus 2019 durante a gravidez; no entanto, informações sobre
              doenças associadas a outros corona vírus altamente patogênicos (ou seja, síndrome respiratória aguda grave
              e síndrome respiratória do Oriente Médio) podem fornecer informações sobre os efeitos da doença de corona
              vírus 2019 durante a gravidez.¹
              As gestantes estão incluídas no grupo de risco, não por serem mais propensas á doença, mas sim, devido às
              mudanças no corpo e sistema imunológico. Desse modo, a gestação modifica o organismo materno alterando a
              bioquímica e a anatomia de todos os seus aparelhos e sistemas, podendo agravar entidades mórbidas
              preexistentes ou produzir sintomas que , embora fisiológicos, são por vezes molestos.
              Tais alterações são resultado da resposta do organismo materno ao feto e se iniciam desde a fertilização.
              Dessa forma, as adaptações anatômicas, fisiológicas e bioquímicas na gravidez são profundas e decorrem,
              principalmente de fatores hormonais e mecânicos, o que pode agravar severamente algumas infecções
              respiratórias contraídas. É importante, por isso, que as gestantes tomem precauções para se protegerem
              contra o COVID-19.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12"
               md="6">
          <iframe width="560" height="400"
                  src="https://www.youtube.com/embed/RH_V2rtFqYM?autoplay=1&controls=1&fs=0&loop=1&playlist=RH_V2rtFqYM&modestbranding=1&origin=http://localhost:8080/#/"
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
    data: () => ({})
  }
</script>

<style scoped>

</style>
