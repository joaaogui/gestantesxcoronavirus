import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/acessos',
    name: 'Metrics',
    component: () => import(/* webpackChunkName: "about" */ '../views/Metrics.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
