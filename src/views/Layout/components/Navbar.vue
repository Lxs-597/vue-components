<template>
  <nav class="nav">
    <h1 class="title">Vue Component Collection</h1>
  </nav>
</template>

<script>
import Hamburger from '@/components/Hamburger'

export default {
  name: 'Navbar',
  components: { Hamburger },
  computed: {
    isOpened() {
      return this.$store.getters.sidebar.isOpened
    }
  },
  methods: {
    toggleHumbergerClick() {
      console.log('click')
      this.$store.dispatch('toggleSidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~scss/variable.scss';
  .nav {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height: $nav-height;
    line-height: $nav-height;
    color: $color-white;
    background: $color-theme-d;
    padding: 0 24px;
    box-shadow: 0px 2px 4px -1px $shadow-dark, 0px 4px 5px 0px $shadow-light, 0px 1px 10px 0px $shadow-bright;
    .title {
      font-size: 24px;
      color: $color-theme;
    }
  }
</style>
