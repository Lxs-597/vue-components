<template>
  <div>
    <h2>Home</h2>
    <button @click="notify">click</button>
  </div>
</template>

<script>
export default {
  methods: {
    notify() {
      this.$notify({
        message: 'text $notify'
      })
    }
  }
}
</script>

<style>

</style>
