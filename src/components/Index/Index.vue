<template>
  <section class="sim-indev">
    <sim-anchor
      ref="anchorRef"
      :list="anchorList"
      @skipToListAnchor="skipToListAnchor"
    ></sim-anchor>
    <sim-list
      ref="listRef"
      v-if="sortSingerList.length"
      :list="sortSingerList"
      @listItemClick="listItemClick"
      @skipToAsideAnchor="skipToAsideAnchor"
    ></sim-list>
  </section>
</template>

<script>
import SimAnchor from './Anchor'
import SimList from './List'
import singers from '@/mock/singers'

const HOT_NAME = '热门'
const HOT_LEN = 10

export default {
  name: 'SimIndex',
  components: { SimAnchor, SimList },
  data() {
    return {
      singerList: []
    }
  },
  computed: {
    sortSingerList() {
      let hot = []
      let res = []

      for (let value of Object.values(this.singerList)) {
        if (value.title === HOT_NAME) {
          hot.push(value)
        } else if (value.title.match(/[a-zA-Z]/)) {
          res.push(value)
        }
      }

      return [...hot, ...res.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))]
    },
    anchorList() {
      return this.sortSingerList.map(item => item.title.substring(0, 1))
    }
  },
  methods: {
    listItemClick() {},
    mapSingerList() {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }

      singers.forEach((item, index) => {
        if (index < HOT_LEN) {
          map.hot.items.push({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          })
        }

        const key = item.Findex

        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }

        map[key].items.push({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        })
      })

      return map
    },
    skipToAsideAnchor(index) {
      this.$refs.anchorRef.skipToAnchor(index)
    },
    skipToListAnchor(index) {
      this.$refs.listRef.skipToAnchor(index)
    }
  },
  created() {
    this.singerList = this.mapSingerList()
  },
}
</script>

<style lang="less" scoped>
  .sim-indev {
    width: 100%;
    height: 100%;
    background-color: #303030;
  }
</style>