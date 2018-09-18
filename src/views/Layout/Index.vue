<template>
  <section class="app-container">
    <navbar></navbar>
    <section class="main-wrapper">
      <sidebar class="sidebar-wrapper" :class="{'closed': !sidebar.isOpened}"></sidebar>
      <app-main>
        <section slot="header" class="main-header">
          <hamburger :toggle-click="toggleHumbergerClick" :is-active="isOpened" class="hamburger-container"></hamburger>
          <breadcrumb slot="header"></breadcrumb>
        </section>
      </app-main>
    </section>
  </section>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { mapGetters } from 'vuex'
import ResizeMixin from '@/mixins/resize'

export default {
  name: 'Layout',
  components: { AppMain, Navbar, Sidebar, Breadcrumb, Hamburger },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters(['device', 'sidebar']),
    isOpened() {
      return this.sidebar.isOpened
    }
  },
  methods: {
    toggleHumbergerClick() {
      console.log('click')
      this.$store.dispatch('toggleSidebar')
    }
  },
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
      .main-header {
        border: solid 1px #e6e6e6;
        .hamburger-container {
          line-height: 60px;
          height: 40px;
          float: left;
          padding: 0 10px;
        }
      }
    }
  }
</style>
