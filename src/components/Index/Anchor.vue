<template>
  <div class="sim-anchor" @touchstart.stop="handleTouchStart" @touchmove.stop.prevent="handleTouchMove">
    <ul>
      <li v-for="(item, index) in list" :key="item"
        :data-index="index"
        :class="{ current: currentIndex === index}"
        class="sim-anchor__item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
const ANCHOR_HEIGHT = 18

export default {
  name: 'SimAnchor',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    handleTouchStart(e) {
      let anchorIndex = Number(e.target.dataset.index)

      if(!anchorIndex && anchorIndex !== 0) return

      this.touch.touchIndex = anchorIndex
      this.touch.y1 = e.touches[0].pageY

      this.$emit('skipToListAnchor', anchorIndex)
    },
    handleTouchMove(e) {
      this.touch.y2 = e.touches[0].pageY

      let skip = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
      let touchIndex = this.touch.touchIndex + skip

      if (touchIndex < 0) {
        touchIndex = 0
      } else if (touchIndex > this.list.length) {
        touchIndex = this.list.length - 1
      }

      this.$emit('skipToListAnchor', touchIndex)
    },
    skipToAnchor(index) {
      this.currentIndex = index
    }
  },
  created() {
    this.touch = {}
  }
}
</script>

<style lang="less" scoped>
.sim-anchor {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 9;
  width: 20px;
  transform: translateY(-50%);
  padding: 10px 0;
  border-radius: 10px;
  background-color: #303030;
  text-align: center;
  &__item {
    font-size: 12px;
    padding: 3px;
    line-height: 1;
    color: rgba(#fff, .5);
    &.current {
      color: #FDD835;
    }
  }
}
</style>
