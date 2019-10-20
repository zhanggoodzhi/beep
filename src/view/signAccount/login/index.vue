<style lang="scss" scoped>
  @import 'index';
</style>
<template>
    <div class="login">
      <div class="login-wrapper">
        <div class="login-logo">
          <p class="login-logo-bg">logo</p>
        </div>
        <div class="login-main">
          <div class="login-container">
            <el-tabs v-model="opeList.tab.active" @tab-click="handleClick">
              <el-tab-pane :label="opeList.tab.list[0].name" :name="opeList.tab.list[0].value">
                <div>
                  <el-input v-model="opeList.accountVerifyList.name.value" placeholder="请输入常用手机号/邮箱"></el-input>
                </div>
                <div>
                  <el-input v-model="opeList.accountVerifyList.pwd.value" placeholder="请输入密码"></el-input>
                </div>
              </el-tab-pane>
              <el-tab-pane :label="opeList.tab.list[1].name" :name="opeList.tab.list[1].value">fff</el-tab-pane>
            </el-tabs>
          </div>
          <div class="login-ways"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      'opeList': {
        'tab': {
          'active': 'pwdWay',
          'list': [ { 'name': '密码登录', 'value': 'pwdWay' }, { 'name': '验证码登录', 'value': 'codeWay' } ]
        },
        'accountVerifyList': {
          'name': { 'value': '' },
          'pwd': { 'value': '' }
        },
        'codeVerifyList': {
          'pwd': ''
        }
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>

</style>
