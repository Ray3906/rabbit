
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
const router= createRouter({
  history :createWebHistory(import.meta.env.BASE_URL),
  routes :[
    {
      path: '/',
      name: '/',
      component: () => import('@/App.vue'),
    },
    {
      path:'/layout',
      name:'layout',
      component: Layout,
      
      children:[
        {
          path:'',
          name:'home',
          component:()=>import('@/views/Home/home-index.vue'),
        },
        {
          path:'category/:id',
          name:'category',
          component:Category
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login,
    }
  ]
})


export default router
