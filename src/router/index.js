import Vue from 'vue'
import VueRouter from 'vue-router'
import Cartelera from '../views/Cartelera.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cartelera',
    name: 'Cartelera',
    component: Cartelera
  },
  {
    path: '/form',
    name: 'Formulario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Formulario.vue')
  },
  {
    path: '/ ',
    name: 'Home',
    redirect: '/cartelera'
  }
]

const router = new VueRouter({
  routes
})

export default router
