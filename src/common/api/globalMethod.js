/**
 * 全局方法
 */
import Vue from 'vue'
// import merge from 'webpack-merge'
// import Cookies from 'js-cookie'
// import $ from 'jquery'
// import { mapGetters, mapMutations } from 'vuex'
import store from '../../store/'

export default new Vue({
  data () {
    return {
      port: window.location.port
    }
  },
  created () {
    this.$store = store
  },
  methods: {
  }
})
