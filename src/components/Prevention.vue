<template>
  <section id="blog">
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Prevenção</h2>

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
          md="4"
        >
          <div
            class="title font-weight-light mb-5"
          >
            As gestantes devem ter cuidado redobrado quando o assunto é o Coronavírus, uma vez que estão em constante
            mudança fisiológica e hormonal durante a gestação. É importante ressaltar que durante a gestação as mulheres
            grávidas possuem um maior contato com ambientes hospitalares e de saúde, bem como com profissionais da área,
            e por esse e outros motivos o método de prevenção utilizado é dividido em prevenção de infecção em mulheres
            grávidas e prevenção de infecção para profissionais que estão em contato com a gestante.
          </div>
          <div class="title font-weight-light mb-5"> Desse modo, as grávidas devem manter uma distância segura entre elas e o profissional de saúde, cerca de
            1 a 2 metros de distância. Além disso, deve ocorrer o controle telemático da gravidez, sempre que possível,
            adiar as consultas que não são essenciais e manter uma boa higienização pessoal. Seguindo esse raciocínio,
            os profissionais de saúde devem adotar medidas específicas, para que assim não venham a se contaminar e
            transmitir para outros pacientes, assim como, para as grávidas, as quais irá atender. Sendo assim, as
            medidas preventivas gerais são: sempre que possível utilizar do meio virtual para fazer as reuniões entre a
            equipe obstétrica, realizar a higiene pessoal adequada e fazer o uso de máscaras cirúrgicas, luvas, batas e
            proteção para os olhos.
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
  export default {
    name: 'Prevention',
    data: () => ({
      articles: [
        {
          src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Est lotus abactor, cesaris. ',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Fluctui, valebat, et itineris tramitem. ',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: 'Extum castus resistentia est. ',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        }
      ]
    })
  }
</script>

<style scoped>

</style>
