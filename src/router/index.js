import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/list',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/List/index'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'list/:id',
        name: 'ListDetail',
        component: () => import(/* webpackChunkName: "list-detail" */ '@/views/List/_id/index'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'favorite',
        name: 'Favorite',
        component: () => import(/* webpackChunkName: "favorite" */ '@/views/Favorite/index'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'seller',
        name: 'Seller',
        component: () => import(/* webpackChunkName: "seller" */ '@/views/Seller/index'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard/index'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login/index'),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: '*',
    redirect: '/list',
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: '/craw-fc-two/',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  console.log(to.matched.some((record) => record.meta.requiresAuth))
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = JSON.parse(window.localStorage.getItem('fc-user'))
    if (!user) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
