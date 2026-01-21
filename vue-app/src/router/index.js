import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/index.vue'),
    },
    {
      path: '/messages',
      name: 'Messages',
      component: () => import('@/pages/messages/index.vue'),
    },
  ],
})

export default router
