<template>
  <scroll :data="list" :probeType="probeType" @scroll="scroll" :listenScroll="listenScroll" class="sim-list" ref="listScroll">
    <ul>
      <li v-for="(group, index) in list" :key="index" ref="listGroup">
        <h2 :key="index" class="sim-list__title">{{ group.title }}</h2>
        <div
          class="sim-list__item"
          v-for="(item, id) in group.items"
          :key="group.title + id"
          @click="handleItemClick(item)"
          v-html="item.name"
        ></div>
      </li>
    </ul>

    <div class="sim-list__fix" v-show="fixTitle && scrollY < 0" ref="fixTitle">
      <h2>{{ fixTitle }}</h2>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/Scroll'

const FIX_TITLE_HEIGHT = 28

export default {
  name: 'SingerList',
  components: { Scroll },
  props: {
    list: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      probeType: 3,
      listenScroll: true,
      scrollY: -1,
      fixTitle: '',
      diff: -1
    }
  },
  methods: {
    scroll(pos) {
      this.scrollY = pos.y
      this.$emit('skipToAsideAnchor', this.current)

      if(this.fixTitle && this.fixTitle === this.list[this.current].title) {
        return
      }

      this.fixTitle = this.list[this.current].title
    },
    handleItemClick(item) {
      this.$emit('listItemClick', item)
    },
    refresh() {
      this.$refs.listScroll.refresh()
    },
    skipToAnchor(index) {
      this.$refs.listScroll.scrollToElement(this.$refs.listGroup[index], 300)
    }
  },
  computed: {
    heightList() {
      let height = 0
      return [0, ...this.$refs.listGroup.map(item => height += item.clientHeight)]
    },
    current() {
      let y = -this.scrollY
      let list = this.heightList
      let current = 0

      if (y < 0) return current

      for (let i = 0; i < list.length - 1; i++) {
        let h1 = list[i]
        let h2 = list[i + 1]
        if (y >= h1 && y < h2) {
          this.diff = h2 - y
          return i
        }
      }

      return list.length - 2
    }
  },
  watch: {
    diff(val) {
      let fixTop = (val > 0 && val < FIX_TITLE_HEIGHT) ? val - FIX_TITLE_HEIGHT : 0
      this.$refs.fixTitle.style.transform = `translate3d(0, ${fixTop}px, 0)`
    }
  }
}
</script>

<style lang="less" scoped>
  .sim-list {
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    &__title {
      color: hsla(0,0%,100%,.7);
      height: 48px;
      line-height: 48px;
      padding: 0 16px;
      background-color: #424242;
    }
    &__item {
      color: #757575;
      height: 48px;
      line-height: 48px;
      padding: 0 16px;
      background-color: #212121;
    }
    &__fix {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      color: hsla(0,0%,100%,.7);
      height: 48px;
      line-height: 48px;
      padding: 0 16px;
      background-color: #424242;
    }
  }
</style>

