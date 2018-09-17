<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <template v-for="(item, index) in crumbs" v-if="item.meta.title">
        <el-breadcrumb-item
          :key="item.path"
          :to="{path: item.redirect || item.path}"
          :class="{'no-redirect': index === crumbs.length - 1}">
            {{ item.meta.title }}
        </el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      crumbs: null
    }
  },
  methods: {
    getCrumbs() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first) {
        matched = [{ path: '/home', meta: { title: '首页' } }, ...matched]
      }
      this.crumbs = matched
    }
  },
  created() {
    this.getCrumbs()
  },
  watch: {
    $route() {
      this.getCrumbs()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~scss/variable.scss';

.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  height: 40px;
  line-height: 46px;
  margin-left: 10px;
  .el-breadcrumb__inner {
    color: $color-theme-d;
    font-weight: bolder;
    cursor: pointer;
    &.no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
}
</style>
