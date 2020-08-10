import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DynamicCmponent',
    name: 'DynamicCmponent',
    component: () => import('../views/DynamicCmponent.vue').then(m => m.default || m)
  },
  {
    path: '/Sync',
    name: 'Sync',
    component: () => import('../views/Sync.vue').then(m => m.default || m)
  } 
]

const router = new VueRouter({
  routes
})

export default router
