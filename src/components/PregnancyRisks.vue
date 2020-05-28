<template>
  <section class="grey lighten-3" id="features">
    <v-container>
      <h2 class="display-2 font-weight-light text-center my-8">
        Porque o COVID-19 é um risco para as gestantes ?
      </h2>
      <v-row>
        <v-col class="title font-weight-light" cols="12" lg="5" md="4">
          <div class="mb-4">
            Há dados limitados sobre a doença de corona vírus 2019 durante a gravidez; no entanto, informações sobre
            doenças associadas a outros corona vírus altamente patogênicos (ou seja, síndrome respiratória aguda grave
            e síndrome respiratória do Oriente Médio) podem fornecer informações sobre os efeitos da doença de corona
            vírus 2019 durante a gravidez.
            <Citation :number="9" :text='this.references[9]'/>
          </div>
          <div class="mb-4">
            As gestantes estão incluídas no grupo de risco, não por serem mais propensas á doença, mas sim, devido às
            mudanças no corpo e sistema imunológico. Desse modo, a gestação modifica o organismo materno alterando a
            bioquímica e a anatomia de todos os seus aparelhos e sistemas, podendo agravar entidades mórbidas
            preexistentes ou produzir sintomas que , embora fisiológicos, são por vezes molestos.
          </div>
          <div>
            Tais alterações são resultado da resposta do organismo materno ao feto e se iniciam desde a fertilização.
            Dessa forma, as adaptações anatômicas, fisiológicas e bioquímicas na gravidez são profundas e decorrem,
            principalmente de fatores hormonais e mecânicos, o que pode agravar severamente algumas infecções
            respiratórias contraídas. É importante, por isso, que as gestantes tomem precauções para se protegerem
            contra o COVID-19.
          </div>
        </v-col>
        <v-col align-self="center" cols="12" lg="7" md="8">
          <v-responsive min-height="500">
            <div style="display: flex;  width: 100%; height: 100%; flex-direction: column; overflow: hidden">
              <iframe
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                class="iframe"
                src="https://www.youtube.com/embed/RH_V2rtFqYM?autoplay=1&controls=1&fs=0&loop=1&playlist=RH_V2rtFqYM&modestbranding=1&origin=http://localhost:8080/#/"/>
            </div>
          </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  import Citation from "@/components/Citation"
  import references from "@/utils"

  export default {
    name: 'PregnancyRisks',
    components: {
      Citation
    },
    computed: {
      references() {
        return references
      }
    }
  }
</script>

<style scoped>
  .iframe {
    flex-grow: 1;
    border: none;
    margin: 0;
    padding: 0;
  }
</style>
