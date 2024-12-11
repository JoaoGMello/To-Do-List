import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('../layout/layout.vue'),
      children: [
        {
          path: '/tasks-list',
          name: 'TasksList',
          component: () => import('../pages/TasksList.vue')
        },
      ]
    },
  ]
})

export default router