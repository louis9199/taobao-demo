<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue'
import NavHeader from '@/components/NavHeader.vue'
export default {
  components: { NavFooter, NavHeader },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home'
}
</script>

<style>
</style>