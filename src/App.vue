<!--<template>-->
<!--  <div id="app">-->
<!--    <router-view></router-view>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'common/style/animation.scss';
  @import 'common/style/color.scss';
  @import 'common/style/common.scss';
  /*自定义主题*/
</style>
