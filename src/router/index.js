import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/pages/AuthPage')
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('@/pages/PostsPage')
  },
  {
    path: '/',
    redirect: '/auth'
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/pages/NotFoundPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
