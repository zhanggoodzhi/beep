<template>
  <div>
    <Common-header></Common-header>
    <div class="min-h-container"><router-view></router-view></div>
    <Common-footer></Common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/header/header.vue'
import CommonFooter from '@/components/common/footer/footer.vue'

export default {
  components: {
    CommonHeader: CommonHeader,
    CommonFooter: CommonFooter
  },
  props: []
}
</script>

<style scoped>

</style>
