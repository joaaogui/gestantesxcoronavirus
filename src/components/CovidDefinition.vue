<template>
  <section id="about-me">
    <v-container class="text-center">
      <h2 class="text-center display-2 font-weight-light my-8">COVID-19 - O que é ?</h2>
      <div class="title text-center font-weight-light">
        De acordo com o Ministério da Saúde(MS). A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que
        apresenta um quadro clínico que varia de infecções assintomáticas a quadros respiratórios graves. De acordo com
        a Organização Mundial de Saúde (OMS), a maioria dos pacientes com COVID-19 (cerca de 80%) podem ser
        assintomáticos e cerca de 20% dos casos podem requerer atendimento hospitalar por apresentarem dificuldade
        respiratória e desses casos aproximadamente 5% podem necessitar de suporte para o tratamento de insuficiência
        respiratória (suporte ventilatório).
        <Citation :number="1" :text='this.references[1]'/>
      </div>

      <h2 class="display-1 font-weight-light text-center my-6">Covid-19 na corrente sanguínea</h2>

      <v-row class="title font-weight-light">
        <v-col cols="12" sm="6">
          Coronavírus (CoV) é um envelope, vírus do ácido ribonucleico (RNA) de cadeia positiva da família dos
          Coronaviridae e pertencente à ordem Nidovirales,
          <Citation :number="2" :text='this.references[2]'/>
          geralmente causando infecções respiratórias e
          gastrointestinais que podem variar de condições leves e autolimitantes a distúrbios mais graves, como
          pneumonia
          viral com comprometimento sistêmico.
          <Citation :number="3" :text='this.references[3]'/>
        </v-col>
        <v-col cols="12" sm="6">
          Nas últimas duas décadas, o CoV foi responsável por duas grandes epidemias: a síndrome respiratória aguda
          grave
          (SARS) que infectou 8098 pessoas com uma taxa de letalidade de cerca de 10,5% e o oriente médio.
          <Citation :number="4" :text='this.references[4]'/>
          Síndrome
          respiratória (MERS) com um total de 2519 laboratórios confirmado de casos comuns e uma taxa de letalidade de
          34,4%.
          <Citation :number="5" :text='this.references[5]'/>
        </v-col>
        <v-col cols="12" sm="6">
          Depois de começar como uma epidemia na China, a infecção por COVID-19 se espalhou rapidamente em muitos outros
          países, e o número de casos afetados continua a aumentar significativamente. A taxa geral de mortalidade varia
          de 3% a 4%, de acordo com os relatórios da Organização Mundial da Saúde,
          <Citation :number="6" :text='this.references[6]'/>
          mas uma taxa mais alta de pacientes
          requer admissão na unidade de terapia intensiva (UTI).
          <Citation :number="7" :text='this.references[7]'/>
        </v-col>
        <v-col cols="12" sm="6">
          O termo coronavírus deriva da palavra latina corona, que significa coroa ou halo; essa designação decorre do
          aparecimento de virions de coronavírus visualizados por microscopia eletrônica, na qual as partículas virais
          exibem uma franja semelhante a uma coroa, geralmente chamada de picos.
          <Citation :number="8" :text='this.references[8]'/>
        </v-col>
      </v-row>
    </v-container>

  </section>
</template>

<script>
  import Citation from '@/components/Citation'
  import references from '@/utils'

  export default {
    name: 'CovidDefinition',
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

</style>
