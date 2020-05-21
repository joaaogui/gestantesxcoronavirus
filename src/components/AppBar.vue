<template>
  <v-app-bar
    dense
    dark
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
    </v-menu>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar'
  }
</script>

<style scoped>

</style>
