<template>
  <section id="stats">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      src="../assets/virus.jpg"
    >
            <span
              :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
              class="font-weight-thin text-center mt-12"
            >
        Transmissão
      </span>
      <v-container fill-height>
        <v-row class="mx-auto">
          <v-col
            cols="12"
            md="3"
          >
            <v-responsive
              class="mx-auto title font-weight-light mb-8"
              max-width="720"
            >
              Para a transmissão do SARS-CoV é necessário algum vetor de transporte, correntes de ar servem como
              transporte de pequenas gotículas de saliva, e normalmente elas não são capazes de ultrapassar a distância
              de 1 metro.

            </v-responsive>
            <v-responsive
              class="mx-auto title font-weight-light mb-8"
              max-width="720"
            >
              A transmissão do novo coronavírus ocorre tanto pelo contato direto quanto indireto com o vírus, que é
              transportado por gotículas expelidas pela fala, tosse ou espirro de pessoas doentes, toque de aperto de
              mão, catarro, objetos ou superfícies contaminadas, como celulares, mesas, maçanetas, brinquedos, teclados
              de computador (Ministério da Saúde, 2020). Sendo assim, a infecção acontece quando estas gotículas entram
              em contato com a mucosa dos olhos, nariz e boca.

            </v-responsive>
            <v-responsive
              class="mx-auto title font-weight-light mb-8"
              max-width="720"
            >
              Dessa maneira, estas gotículas contaminadas ao serem expelidas podem aderir a superfícies e possuir
              diferentes períodos de tempos para que ainda seja possível a transmissão, como em plástico e o aço
              inoxidável que pode durar de 2 a 3 dias, o papelão até um dia e o cobre cerca de 4 horas. Ademais, um
              fator que se demonstrou importante para a transmissão do vírus é a umidade, ela é responsável pela
              resistência que o vírus terá ao sair do organismo do infectado e é um fator determinante para a sua
              sobrevivência temporária no meio. [1]
            </v-responsive>

            <h2 class="display-1 font-weight-light mb-8 text--secondary">Transmissão Vertical</h2>

            <v-responsive
              class="mx-auto title font-weight-light mb-8"
              max-width="720"
            >
              Em gestantes hospitalizadas com infecção por COVID-19, não foram relatados casos de transmissão vertical.
              A infecção por COVID-19 foi associada a taxas relativamente mais altas de nascimento prematuro,
              pré-eclâmpsia, parto cesáreo e morte perinatal. [2]
            </v-responsive>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
  export default {
    name: 'Transmission',
    data: () => ({})
  }
</script>

<style scoped>

</style>
