<template>
  <section class="app-container">
    <navbar></navbar>
    <section class="main-wrapper">
      <sidebar class="sidebar-wrapper" :class="{'closed': !sidebar.isOpened}"></sidebar>
      <app-main></app-main>
    </section>
  </section>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
import { mapGetters } from 'vuex'
import ResizeMixin from '@/mixins/resize'

export default {
  name: 'Layout',
  components: { AppMain, Navbar, Sidebar },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters(['device', 'sidebar'])
  }
}
</script>

<style lang="scss" scoped>
@import '~scss/variable.scss';
@import '~scss/mixins.scss';

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
      overflow: hidden;
      transition: width .28s;
      &.closed {
        width: 68px;
      }
    }
    .main-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: calc(100vh - #{$nav-height});
    }
  }
</style>
