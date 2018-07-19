<template>
  <section class="app-container">
    <navbar></navbar>
    <section class="main-wrapper">
      <sidebar class="sidebar-wrapper"></sidebar>
      <app-main></app-main>
    </section>
  </section>
</template>

<script>
import AppMain from './components/AppMain'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default {
  name: 'Index',
  components: { AppMain, Navbar, Sidebar }
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
    padding-top: $nav-height;
    .sidebar-wrapper {
      position: fixed;
      left: 0;
      top: $nav-height;
      bottom: 0;
      width: $sidebar-width;
      box-shadow: 1px 0px 15px 0px $shadow-dark, 0px 0px 10px -1px $shadow-light;
    }
    .main-wrapper {
      min-height: calc(100vh - #{$nav-height});
      transition: margin-left .28s;
      margin-left: $sidebar-width;
      position: relative;
    }
  }
</style>
