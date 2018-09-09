import store from '@/store'
import { throttle } from '@/utils/utils'

const WIDTH = 1024
const RATIO = 3

export default {
  methods: {
    isMobile() {
      const rect = document.body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        const isOpened = this.sidebar.isOpened

        store.dispatch('toggleDevice', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          isOpened && store.dispatch('closeSidebar')
        } else {
          !isOpened && store.dispatch('openSidebar')
        }
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', throttle(this.resizeHandler))
  },
  mounted() {
    const isMobile = this.isMobile()

    if (isMobile) {
      store.dispatch('toggleDevice', 'mobile')
      store.dispatch('closeSidebar')
    }
  },
  watch: {
    $route() {
      if (this.device === 'mobile' && this.sidebar.isOpened) {
        store.dispatch('closeSidebar')
      }
    }
  }
}