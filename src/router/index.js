import { createRouter, createWebHistory } from 'vue-router'
import cookie from 'browser-cookies'

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/pages/AuthPage'),
    beforeEnter (to, from, next) {
      const auth = cookie.get('auth')
      if (to.path === '/auth' && auth) {
        console.log(1)
        next({
          path: '/posts'
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('@/pages/PostsPage')
  },
  {
    path: '/',
    redirect: '/posts'
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
