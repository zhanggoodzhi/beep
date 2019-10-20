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
        src="@/assets/register/tuoyuan.png"
        alt=""
      >
      <span>微信快速登录</span>
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
    </div>
    <div class="center"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

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
