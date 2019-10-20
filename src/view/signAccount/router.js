import login from './login/router.js'
import register from './register/router.js'
export default {
  path: '/',
  component: {
    template: '<router-view></router-view>'
  },
  redirect: '/login',
  // meta: {title: '登录注册'},
  children: [login, register]
}
