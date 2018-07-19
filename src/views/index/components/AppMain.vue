<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
@import '~scss/variable.scss';

.app-main {
  min-height: calc(100vh - #{$nav-height});
  position: relative;
  overflow: hidden;
}
</style>
