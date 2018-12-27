<template>
  <section class="container">
    {{ tip }}
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      timer: null,
      remainTime: 35909302
    }
  },
  computed: {
    tip() {
      const time = new Date(this.remainTime)
      const hours = time.getHours() + ''
      const minutes = time.getMinutes() + ''
      const seconds = time.getSeconds() + ''

      return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
    }
  },
  methods: {
    countDown() {
      if (this.timer) this.clearCountDown()
      this.timer = setTimeout(this.countDownHandler, 1000)
    },
    countDownHandler() {
      if (this.remainTime > 0) {
        if (this.remainTime < 1000) {
          this.remainTime = 0
        } else {
          this.remainTime = this.remainTime - 1000
        }
        return this.countDown()
      }

      this.clearCountDown()
    },
    clearCountDown() {
      clearTimeout(this.countDownHandler)
      this.timer = null
    }
  },
  mounted() {
    this.countDown()
  },
  beforeDestroy() {
    this.clearCountDown()
  }
}
</script>

<style lang="less" scoped>

</style>