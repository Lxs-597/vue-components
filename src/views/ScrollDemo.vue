<template>
  <div class="scroll-page">
    <scroll
      ref="scroll"
      class="scroll"
      :data="list"
      :probeType="1"
      :pullup="true"
      @pullUp="pullUp"
      :pulldown="true"
      @pullDown="pullDown"
      :listenScroll="true"
      @scroll="scroll"
    >
      <ul>
        <div ref="loading" class="loading">松开刷新....</div>
        <li
          v-for="(item, index) in list"
          :key="item"
          :class="{'border-b': index < list.length - 1}"
        >{{item}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/Scroll'

export default {
  name: 'ScrollDemo',
  components: { Scroll },
  data() {
    return {
      list: (() => {
        let ret = []
        for (let i = 0; i < 20; i++) {
          ret.push(`item-${i}`)
        }
        return ret
      })(),
      isPullingDown: false
    }
  },
  methods: {
    scroll(pos) {
      if (pos.y > 0) {
        this.$refs.loading.style.opacity = (pos.y / 50 < .8 ? pos.y / 50 : .8)
      }
    },
    pullUp() {
      let len = this.list.length
      if (len > 100) {
        this.$nextTick(this.$refs.scroll.finishPullUp)
        return
      }
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(`item-${len + i}`)
        }
        // 通知scroll结束滚动
        this.$nextTick(this.$refs.scroll.finishPullUp)
      }, 1000)
    },
    pullDown() {
      setTimeout(() => {
        let ret = []
        for (let i = 0; i < 20; i++) {
          ret.push(`item-${i}`)
        }
        this.list = ret
        // 通知scroll结束滚动
        this.$nextTick(this.$refs.scroll.finishPullDown)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-page {
  position: relative;
  width: 100%;
  height: 100%;
  .scroll {
    position: absolute;
    left: 40px;
    top: 40px;
    right: 40px;
    bottom: 40px;
    overflow: hidden;
    border: 1px solid #ccc;
  }
  li {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    padding-left: 40px;
  }
  .border-b {
    border-bottom: 1px solid #ccc;
  }
  .loading {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: absolute;
    left: 0;
    top: -50px;
    opacity: 0;
  }
}
</style>
