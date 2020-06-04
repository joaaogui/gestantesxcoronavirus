<template>
  <section id="blog">
    <v-container>
      <h2 class="display-2 font-weight-light text-center my-8">Prevenção</h2>
      <v-row>
        <v-col class="title font-weight-light" cols="12" md="6">
          As gestantes devem ter cuidado redobrado quando o assunto é o Coronavírus, uma vez que estão em constante
          mudança fisiológica e hormonal durante a gestação. É importante ressaltar que durante a gestação as mulheres
          grávidas possuem um maior contato com ambientes hospitalares e de saúde, bem como com profissionais da área,
          e por esse e outros motivos o método de prevenção utilizado é dividido em prevenção de infecção em mulheres
          grávidas e prevenção de infecção para profissionais que estão em contato com a gestante.
        </v-col>
        <v-col class="title font-weight-light" cols="12" md="6">
          Desse modo, as grávidas devem manter uma distância segura entre elas e o profissional de saúde, cerca de
          1 a 2 metros de distância. Além disso, deve ocorrer o controle telemático da gravidez, sempre que possível,
          adiar as consultas que não são essenciais e manter uma boa higienização pessoal. Seguindo esse raciocínio,
          os profissionais de saúde devem adotar medidas específicas, para que assim não venham a se contaminar e
          transmitir para outros pacientes, assim como, para as grávidas, as quais irá atender. Sendo assim, as
          medidas preventivas gerais são: sempre que possível utilizar do meio virtual para fazer as reuniões entre a
          equipe obstétrica, realizar a higiene pessoal adequada e fazer o uso de máscaras cirúrgicas, luvas, batas e
          proteção para os olhos.
          <Citation :number="12" :text='this.references[12]'/>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  import Citation from '@/components/Citation'
  import references from '@/utils'

  export default {
    name: 'Prevention',
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
