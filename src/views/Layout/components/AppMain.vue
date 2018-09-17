<template>
  <section class="app-main" :class="{'sidebar-closed': !isOpened}">
    <slot name="header"></slot>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    isOpened() {
      return this.$store.getters.sidebar.isOpened
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~scss/variable.scss';

.app-main {
  height: 100%;
  min-height: calc(100vh - #{$nav-height});
  position: relative;
  overflow: hidden;
  margin-left: $sidebar-width;
  transition: margin-left .28s;
  &.sidebar-closed {
    margin-left: 68px;
  }
}
</style>
