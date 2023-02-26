import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import countryInfo from '../views/countryInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/countryInfo/:id',
      name: 'countryInfo',
      component: countryInfo,
      props: true
    }
  ]
})

export default router
