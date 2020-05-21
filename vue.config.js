module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  },

  pwa: {
    name: 'Gestantes x Coronavirus'
  }
}
