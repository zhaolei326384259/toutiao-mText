import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '.././components/Login.vue'
import Home from '.././components/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // 判断用户是否要访问登录页
  if (to.path === '/login') return next()
  // 不是登录页就要检查权限
  var tokenStr = window.sessionStorage.getItem('token')
  // 强制跳转到登录
  if (!tokenStr) return next('/login')
  next()
})

export default router
