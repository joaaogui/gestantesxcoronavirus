import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import VueAnalytics from 'vue-analytics'
import VueClipboard from 'vue-clipboard2'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(VueAnalytics, {
  id: 'UA-100433425-4'
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
