// import HomeView from '../views/HomeView.vue'
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/layout-index.vue'
import Category from '@/views/Category/category-index.vue'
import Login from '@/views/Login/login-index.vue'
import subCategory from '@/views/subCategory/subcategory.vue'
import Detail from '@/views/Detail/Detail-index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,

      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home/home-index.vue')
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subcategory',
          component: subCategory
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component:Detail
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
