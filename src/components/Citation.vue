<template>
  <v-menu offset-y open-on-hover top>
    <template v-slot:activator="{ on }">
      <span style="cursor: pointer; color: dimgrey; font-size: 14px" v-on="on">
        {{number}}
      </span>
    </template>
    <div class="citation">
      <v-tooltip left nudge-left="">
        <template v-slot:activator="{ on }">
          <v-icon @click="copyToClipboard" class="mr-2" style="cursor: pointer" v-on="on">mdi-content-copy</v-icon>
          <!--          <v-btn color="primary" dark v-on="on">Top</v-btn>-->
        </template>
        <span>Copiar referência</span>
      </v-tooltip>

      <div>
        {{text}}
      </div>
    </div>
  </v-menu>
</template>

<script>
  export default {
    name: "Citation",
    props: {
      number: Number,
      text: String
    },
    methods: {
      copyToClipboard() {
        this.$copyText(this.text)
      }
    }
  }
</script>

<style scoped>
  .citation {
    background-color: white;
    font-size: 14px;
    border: 2px solid grey;
    padding: 10px;
    display: flex;
  }
</style>
