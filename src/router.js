import Router from 'vue-router'
import componentRouter from './view/router.js'

let routes = [...componentRouter]

export default new Router({
  mode: 'history',
  routes: routes
})
