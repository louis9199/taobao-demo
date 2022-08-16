<template>
  <div class="loading">
    <img src="../../public/imgs/loading-svg/loading-bars.svg" alt="" />
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'loading'
}
</script>
<style lang="scss">
.loading {
  height: 80px;
  line-height: 80px;
  text-align: center;
  padding: 30px 0;
  img {
    height: 100%;
  }
}
</style>