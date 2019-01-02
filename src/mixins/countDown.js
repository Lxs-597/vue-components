export default {
  data() {
    return {
      timer: null
    }
  },
  computed: {
    tip() {
      const second = 1000
      const oneMinute = second * 60
      const oneHour = oneMinute * 60
      const hours = ((this.remainTime / oneHour) % 60 | 0) + ''
      const minutes = ((this.remainTime / oneMinute) % 60 | 0) + ''
      const seconds = ((this.remainTime / second) % 60 | 0) + ''

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

      this.countDownEnded()
      this.clearCountDown()
    },
    clearCountDown() {
      clearTimeout(this.timer)
      this.timer = null
    },
    countDownEnded() {}
  },
  beforeDestroy() {
    this.clearCountDown()
  }
}