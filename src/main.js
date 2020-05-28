import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import VueAnalytics from 'vue-analytics'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-100433425-4'
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
