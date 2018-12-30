<template>
    <section class="sim-bottom-sheet">
      <transition name="slide">
        <div class="sim-bottom-sheet__content" v-show="value">
          <slot name="content"></slot>
          <slot name="footer">
            <div class="sim-bottom-sheet__footer">
              <van-button type="primary" size="large" @click="handleConfirm">确认</van-button>
            </div>
          </slot>
        </div>
      </transition>
      <transition name="fade">
        <div class="sim-bottom-sheet__masker"
          :style="{ backgroud: showMasker ? 'rgba(0, 0, 0, .5);' : '' }"
          v-show="value"
          @touchmove.stop.prevent
          @click.stop="handleClose"
        ></div>
      </transition>
    </section>
</template>

<script>
export default {
  name: 'SimBottomSheet',
  model: {
    prop: 'value',
    event: 'show'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    showMasker: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('show', false)
    },
    handleConfirm() {
      this.$emit('show', false)
    }
  },
}
</script>

<style lang="less" scoped>
  .sim-bottom-sheet {
    &__content {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      max-height: 70%;
      z-index: 9;
      background: #fff;
      box-shadow: 0 -1px 4px 6px rgba(#000, .02), 0 -2px 6px 8px rgba(#000, .03)
    }
    &__masker {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 8;
    }
  }
</style>