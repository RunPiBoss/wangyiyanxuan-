import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "@/views/Layout.vue"
import Home from '@/views/Home/Home.vue'
import category from '@/store/modules/category'
// 点击才登录，按需引入
const Login = () => import('@/views/Login.vue')
const Category =()=>import('@/views/category/Category.vue')

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '', //子路由可以不写
        component: Home
      },{
        path: '/category/:id', //子路由可以不写
        component: Category
      }
    ]

  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  // Hash模式,引进来地址带#号
  history: createWebHashHistory(),
  routes
})

export default router
