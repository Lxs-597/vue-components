import Notify from './Notify'

export default {
  extends: Notify,
  computed: {
    style() {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  data() {
    return {
      verticalOffset: 0
    }
  }
}