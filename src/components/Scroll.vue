<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    bounce: {
      type: [Boolean, Object],
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    pullup: {
      type: Boolean,
      default: false
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }

      // 初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,  // 滚动时派发事件 1 节流 2 实时 3 回弹时也实时派发
        click: this.click,  // 是否允许点击事件
        scrollX: this.scrollX,  // 是否开启横向滚动
        scrollY: this.scrollY,  // 是否开启竖向滚动 默认竖向滚动
        bounce: this.bounce,  // object 可以传入{ top, right, bottom, left }值 可对应关闭回弹动画
        pullDownRefresh: this.pulldown && { threshold: 50, stop: 50 },  //是否开启下拉刷新功能 threshold 触发距离px stop回弹停留距离px loading高度
        pullUpLoad: this.pullup && { threshold: 20 },  //是否开启上拉加载 threshold是距离底部距离
      })

      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })
      }

      // 是否派发上拉事件
      if (this.pullup) {
        this.scroll.on('pullingUp', () => {
          console.log('pullingUp')

          this.$emit('pullUp')
        })
      }

      // 是否派发下拉事件
      if (this.pulldown) {
        this.scroll.on('pullingDown', () => {
          console.log('pullingDown')

          this.$emit('pullDown')
        })
      }
    },
    refresh() {
      // 重新计算
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      // arguments: x、y 横纵轴坐标p, time 动画时长, easing 过度动画 不建议修改
      this.scroll && this.scroll.scrollTo.apply(this.scroll, Array.from(arguments))
    },
    scrollToElement() {
      // arguments: el dom节点, time, offsetX、offsetY 相对目标节点偏移量, easing
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, Array.from(arguments))
    },
    finishPullUp() {
      this.scroll && this._pullUpRefresh()
    },
    finishPullDown() {
      this.scroll && this._pullDownRefresh()
    },
    enable() {
      // 启用better-scroll 默认开启
      this.scroll && this.scroll.enable()
    },
    disable() {
      // 禁用better-scroll
      this.scroll && this.scroll.disable()
    },
    stop() {
      // 立即停止当前动画
      this.scroll && this.scroll.stop()
    },
    _pullDownRefresh() {
      // 数据加载完后调用
      this.scroll.finishPullDown()
      this.refresh()
    },
    _pullUpRefresh() {
      // 数据加载完后调用
      this.scroll.finishPullUp()
      this.refresh()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  watch: {
    data() {
      // 监听数据变化并重新计算
      this.$nextTick(() => {
        this.refresh()
      })
    }
  }
}
</script>

<style>

</style>
