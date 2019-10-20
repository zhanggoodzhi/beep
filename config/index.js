'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')
const merge = require('webpack-merge')
const proxyTable = {
  // 接口反向代理设置
  '/api': {
    target: 'http://git.smsing.com.cn:8091', // 设置调用接口域名和端口号别忘了加http
    changeOrigin: true,
    timeout: 60 * 1000 * 10,
    pathRewrite: {
      '^/api': '/v1/businesscenter' // 这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
      // 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示/
    }
  },
  // 工作流接口
  '/wapi': {
    target: 'http://git.smsing.com.cn:8092', // 设置调用接口域名和端口号别忘了加http
    // target: 'http://192.168.0.147:8091',
    changeOrigin: true,
    timeout: 60 * 1000 * 10,
    pathRewrite: {
      '^/wapi': '/v1/workflow' // 这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
      // 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示/
    }
  },
  // websocket
  '/wsapi': {
    target: 'http://git.smsing.com.cn:8093', // 设置调用接口域名和端口号别忘了加http
    // target: 'http://192.168.0.147:8091',
    changeOrigin: true,
    timeout: 60 * 1000 * 10,
    ws: true,
    pathRewrite: {
      '^/wsapi': '/websocket/' // 这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
      // 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示/
    }
  },
  // 运维中心
  '/mapi': {
    target: 'http://git.smsing.com.cn:8094',
    // target: 'http://192.168.0.162:8094',
    changeOrigin: true,
    timeout: 60 * 1000 * 10,
    pathRewrite: {
      '^/mapi': '/v1/maintenancecenter'
    }
  }
}

let devConfig = {
  // Paths
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: proxyTable,

  // Various Dev Server settings
  host: 'localhost', // can be overwritten by process.env.HOST
  port: 8080 // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
}
let qaConfig = {
  proxyTable: merge(proxyTable, {
    // 接口反向代理设置
    '/api': {
      target: 'http://git.smsing.com.cn:8091',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v1/businesscenter'
      }
    }
  }),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  // Various Dev Server settings
  host: 'localhost', // can be overwritten by process.env.HOST
  port: 8089 // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
}
let prodConfig = {
  proxyTable: merge(proxyTable, {
    // 接口反向代理设置
    '/api': {
      target: 'http://git.smsing.com.cn:8091',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v1/businesscenter'
      }
    }
  }),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/'
}
let buildConfig = {
  // Template for index.html
  index: path.resolve(__dirname, '../dist/index.html'),

  // Paths
  assetsRoot: path.resolve(__dirname, '../dist'),

  /**
   * Source Maps
   */

  productionSourceMap: true,
  // https://webpack.js.org/configuration/devtool/#production
  devtool: '#source-map',

  // Gzip off by default as many popular static hosts such as
  // Surge or Netlify already gzip all static assets for you.
  // Before setting to `true`, make sure to:
  // npm install --save-dev compression-webpack-plugin
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],

  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report
}

const commonConfig = {
  // Paths
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  autoOpenBrowser: false,
  errorOverlay: true,
  notifyOnErrors: true,
  poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

  /**
   * Source Maps
   */

  // https://webpack.js.org/configuration/devtool/#development
  devtool: 'cheap-module-eval-source-map',

  // If you have problems debugging vue-files in devtools,
  // set this to false - it *may* help
  // https://vue-loader.vuejs.org/en/options.html#cachebusting
  cacheBusting: true,
  cssSourceMap: true
}

module.exports = {
  dev: merge(commonConfig, devConfig),
  qa: merge(commonConfig, qaConfig),
  build: merge(commonConfig, buildConfig),
  prod: merge(commonConfig, prodConfig)
}
