<template>
  <el-scrollbar wrapClass="scrollbar-container">
    <el-menu
      :default-active="$route.path"
      class="menu-container"
      mode="vertical"
      router
      :collapse="!isOpened"
      :unique-opened="true"
      background-color="#616161"
      text-color="#fff"
      active-text-color="#FFC107">
      <template v-for="route in routes">
        <menu-item :key="route.name" :route="route" :base-path="route.path"></menu-item>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import MenuItem from './MenuItem'

export default {
  name: 'Sidebar',
  components: { MenuItem },
  computed: {
    isOpened() {
      return this.$store.getters.sidebar.isOpened
    },
    routes() {
      return this.$router.options.routes
    }
  },
  methods: {

  },
  mounted() {
    console.log(this.$route)
    console.log(this.$router.options.routes)
  }
}
</script>

<style lang="scss" scoped>
  .menu-container {
    width: 100%;
    min-height: 100%;
    padding: 10px 0;
  }
</style>
