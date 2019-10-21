import Welcome from './index'
import home from './home/router.js'
export default {
  path: '/welcome',
  name: 'welcome',
  component: Welcome,
  meta: {
    title: '首页'
  },
  redirect: {
    name: 'home'
  },
  children: [home]
}
