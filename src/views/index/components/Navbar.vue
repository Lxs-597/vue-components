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
  .nav {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height: 68px;
    line-height: 68px;
    color: #fff;
    background: #1565c0;
    border: 1px solid #1565c0;
    padding: 0 24px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  }
</style>
