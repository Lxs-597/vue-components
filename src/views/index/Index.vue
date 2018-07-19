<template>
  <section class="app-container">
    <navbar></navbar>
    <section class="main-wrapper">
      <sidebar class="sidebar-wrapper"></sidebar>
    </section>
  </section>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default {
  name: 'Index',
  components: { Navbar, Sidebar }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/variable.scss';
@import '~@/scss/mixins.scss';

  .app-container {
    @include clear();
    position: relative;
    width: 100%;
    height: 100%;
    .sidebar-wrapper {
      position: fixed;
      left: 0;
      top: $navHeight;
      bottom: 0;
      width: $sidebar-width;
      box-shadow: 1px 0px 15px 0px $shadow-dark, 0px 0px 10px -1px $shadow-light;
    }
  }
</style>
