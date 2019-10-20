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
        src="@/assets/register/man.png"
        alt=""
      >
      <img
        class="flower"
        src="@/assets/register/flower.png"
        alt=""
      >
      <img
        class="women"
        src="@/assets/register/women.png"
        alt=""
      >
      <div class="center clearfix">
        <div class="left">
          <div class="title">
            <span class="big">Beep 币扑</span>
            <span class="split"></span>
            <span class="small">区块链人专属社交网络</span>
          </div>
          <el-input
            class="form-item"
            placeholder="请输入常用手机号"
            v-model="account"
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
          <div>
            <el-button
              class="register-btn color-btn"
              type="primary"
            >注册</el-button>
          </div>
          <div class="tip">注册代表你已同意 「Beep 币扑用户协议」</div>
        </div>
        <div class="right">
          <div class="label">已有账号:</div>
          <el-button class="color-btn" type="primary">直接登录<i class="el-icon-right"></i></el-button>
          <div class="label">
            使用以下账号直接登录:
          </div>
          <div class="icon-wrap">
            <img src="@/assets/register/wx.png" alt="">
             <img src="@/assets/register/QQ.png" alt="">
              <img src="@/assets/register/weibo.png" alt="">
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
      phonePre: '0086',
      account: '',
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
