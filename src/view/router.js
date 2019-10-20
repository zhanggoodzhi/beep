import welcome from './welcome/router.js'
import signAccount from './signAccount/router.js'

let routes = [ welcome, signAccount ]
let exportRoutes = [...routes]
routes.forEach(function (obj, index) {
  if (obj && obj.path) {
    exportRoutes.push(obj)
  }
})
export default exportRoutes
