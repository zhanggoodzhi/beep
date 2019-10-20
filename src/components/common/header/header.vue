<style lang="scss">
  @import 'header.scss';
</style>
<template>
  <div class="common-hearder-wrapper">
    <el-row>
      <el-col :span="24">
        <div class="wrapper common-header clearfix">
          <div class="c-header-chunk header-logo">
            <p class="header-logo-img">LOGO</p>
          </div>
          <div class="c-header-chunk header-search">
            <el-input
              :placeholder="search.placeholder"
              suffix-icon="el-icon-search"
              v-model="search.value">
            </el-input>
          </div>
          <div class="c-header-chunk header-list">
            <ul class="header-list-box clearfix">
              <li class="header-list-line color-words-x-hover">首页</li>
              <li class="header-list-line color-words-x-hover">喵访谈</li>
              <li class="header-list-line color-words-x-hover">活动</li>
              <li class="header-list-line color-words-x-hover">快讯</li>
            </ul>
          </div>
          <div class="c-header-chunk header-content">
            <ul class="header-list-box clearfix">
              <li class="header-list-line"><i class="icon el-icon-edit"></i>发起博文</li>
              <li class="header-list-line"><i class="icon el-icon-mobile"></i>小程序</li>
            </ul>
          </div>
          <div class="c-header-chunk header-login">
            <ul class="header-list-box clearfix">
              <li class="header-list-line" @click="goLogin()">登录</li>
              <li class="header-list-line">注册</li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: {
        'value': '',
        'placeholder': '大家正在搜索：比特币十年'
      }
    }
  },
  methods: {
    goLogin: function () {
      console.log(this)
      this.$router.push({ // 核心语句
        path: '/login', // 跳转的路径
        query: { // 路由传参时push和query搭配使用 ，作用时传递参数
          // id: this.id
        }
      })
    }
  }
}
</script>
