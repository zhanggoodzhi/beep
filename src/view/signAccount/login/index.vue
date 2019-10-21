<style lang="scss" scoped>
@import "index";
</style>
<template>
  <div class="login">
    <div class="login-wrapper">
      <img
        class="wx-btn"
        src="@/assets/register/code.png"
      />
      <img
        class="wx-img"
        src="@/assets/register/tuoyuan.png"
        alt=""
      >
      <span class="wx-span">微信快速登录</span>
      <img
        class="man"
        src="@/assets/register/man2.png"
        alt=""
      >
      <img
        class="women"
        src="@/assets/register/women2.png"
        alt=""
      >
      <div class="center clearfix">
        <div class="left">
          <el-tabs>
            <el-tab-pane label="密码登录">
              <el-input
                class="form-item"
                placeholder="请输入常用手机号/邮箱"
                v-model="account"
              >
              </el-input>
              <el-input
                class="form-item"
                type="password"
                placeholder="请输入密码"
                v-model="password"
              >
              </el-input>
            </el-tab-pane>
            <el-tab-pane label="验证码登录">
              <el-input
                class="form-item"
                placeholder="请输入常用手机号"
                v-model="phone"
              >
                <el-select
                  v-model="phonePre"
                  slot="prepend"
                  style="width:100px;"
                >
                  <el-option
                    label="0086"
                    value="0086"
                  ></el-option>
                </el-select>
              </el-input>
              <el-input
                class="form-item"
                placeholder="请输入验证码"
                v-model="validateCode"
              >
                <el-button slot="append">获取验证码</el-button>
              </el-input>
            </el-tab-pane>
          </el-tabs>

          <div>
            <el-button
              class="register-btn color-btn"
              type="primary"
            >注册</el-button>
          </div>
          <div class="tip">注册代表你已同意 「Beep 币扑用户协议」</div>
        </div>
        <div class="right">
          <div class="label">还没有账号:</div>
          <el-button
            class="color-btn"
            type="primary"
          >立即注册<i class="el-icon-right"></i></el-button>
          <div class="label">
            使用以下账号直接登录:
          </div>
          <div class="icon-wrap">
            <img
              src="@/assets/register/wx.png"
              alt=""
            >
            <img
              src="@/assets/register/QQ.png"
              alt=""
            >
            <img
              src="@/assets/register/weibo.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password:'',
      phonePre: '0086',
      phone: '',
      validateCode: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
</style>
