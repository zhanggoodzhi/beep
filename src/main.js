// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import router from './router'
import store from './store' // 引入store
import axios from 'axios' // 引入axios
import globalMethod from '@/common/api/globalMethod.js'
import globalMap from '@/common/api/globalMap.js'
import Cookies from 'js-cookie'

// import { Container, Main, Button, Select, Option, OptionGroup, Input, Table, Pagination, Notification, MenuItem, Icon, Row, Col, Tooltip, MessageBox, Message, FormItem, Form, Tabs, TabPane, Header, Slider, Footer, Menu, DatePicker } from 'element-ui' // 按需引用element-ui
import 'element-ui/lib/theme-chalk/index.css' // 导入样式
//主题色
import './element-variables.scss'
import {
  Row,
  Col,
  Button,
  Input,
  Tabs,
  Option,
  TabPane,
  MessageBox,
  Message,
  Notification,
  Select
} from 'element-ui'
// import ElementUI from 'element-ui'
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Button', Button)
Vue.component('Input', Input)
Vue.component('Tabs', Tabs)
Vue.component('TabPane', TabPane)
Vue.component('MessageBox', MessageBox)
Vue.component('Message', Message)
Vue.component('Notification', Notification)

Vue.config.productionTip = false

// 全局注册，并加到原型链中
Vue.prototype.axios = axios // 全局注册,任何组件都能直接使用

// use
// Vue.use(ElementUI)
Vue.use(Router)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Option)
Vue.use(Input)
Vue.use(Select);
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

// response 拦截器
Vue.prototype.axios = axios // 全局注册,任何组件都能直接使用
Vue.prototype.globalMethod = globalMethod
Vue.prototype.globalMap = globalMap
Vue.prototype.Cookies = Cookies

// const whiteList = ['/', '/register', '/demo', '/demo/tree1'] // 不重定向白名单
// const dealRoute = function (url, next) {
//   const fullPathList = url.split('/')
//   let hasRole = false
//   if (fullPathList.length > 1) {
//     // const operationRoleData = globalMap.operationRoleMap[fullPathList[1]]
//     let userRoleInfoStr = localStorage.getItem('user_info')
//     if (userRoleInfoStr) {
//       // const userRoleInfo = JSON.parse(localStorage.getItem('user_info'))
//       // hasRole = !operationRoleData || (userRoleInfo && operationRoleData.urlRole.indexOf(userRoleInfo.roles[0].roleCode) > -1)
//       hasRole = true
//     }
//     if (hasRole) {
//       next()
//     } else {
//       // globalMethod.showError('页面不存在')
//       globalMethod.reWriteUrl(next, 'next')
//     }
//   }
// }
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // let isLogin = Cookies.get('userId')
  // if (isLogin && localStorage.getItem('user_info')) {
  //   dealRoute(to.path, next)
  // } else {
  //   if (to.meta.role || to.path === '/') {
  //     next()
  //   } else {
  //     // globalMethod.showInfo('登录信息失效，请重新登录')
  //     next({
  //       path: '/' // 没有cookie登录信息路由跳转到登录页
  //       // query:{} // 登录成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
  //     })
  //   }
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: {
    App
  },
  template: '<App/>'
})
