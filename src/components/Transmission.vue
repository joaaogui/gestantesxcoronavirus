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
            v-for="[value, title] of stats"
            :key="title"
            cols="12"
            md="3"
          >
            <div class="text-center">
              <div
                class="display-3 font-weight-black mb-4"
                v-text="value"
              ></div>

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              ></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
  export default {
    name: 'Transmission',
    data: () => ({
      stats: [
        ['24k', 'Habitios trabem! '],
        ['330+', 'Fuga Trabem aegre messor.'],
        ['1m', 'A falsis, domina secundus turpis.'],
        ['5m', 'Nomens peregrinationes']
      ]
    })
  }
</script>

<style scoped>

</style>
