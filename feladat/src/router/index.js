import { createRouter, createWebHistory } from 'vue-router'
import Vigszinhaz from '../views/Vigszinház.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Vigszinház',
      name: 'Vigszinház',
      component: Vigszinhaz
    },
    {
      path: '/Tháliaszinház',
      name: 'Tháliaszinház',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Tháliaszinház.vue')
    },
    {
      path: '/Centrálszinház',
      name: 'Centrálszinház',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Centrálszinház.vue')
    }
  ]
})

export default router
