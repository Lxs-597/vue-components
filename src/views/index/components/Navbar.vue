<template>
  <nav class="nav">
    navbar
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
@import '~@/scss/variable.scss';
  .nav {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height: $navHeight;
    line-height: $navHeight;
    color: $color-white;
    background: $color-theme;
    border: 1px solid $color-theme-d;
    padding: 0 24px;
    box-shadow: 0px 2px 4px -1px $shadow-dark, 0px 4px 5px 0px $shadow-light, 0px 1px 10px 0px $shadow-bright;
  }
</style>
