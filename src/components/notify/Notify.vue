<template>
  <transition name="fade">
    <div class="notify" :style="style">
      <span class="message">{{ message }}</span>
      <button class="close" @click.stop.prevent="handleClose">{{ close }}</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notify',
  props: {
    message: {
      type: String,
      required: true
    },
    close: {
      type: String,
      default: 'closed'
    }
  },
  computed: {
    style() {
      return {}
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '~scss/variable.scss';
 @import '~scss/transition.scss';

  .notify {
    display: flex;
    background: $color-theme-d;
    color: rgba(#fff, 1);
    align-items: center;
    padding: 20px;
    position: fixed;
    min-width: 280px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    flex-wrap: wrap;
    border-radius: 4px;
    transition: all .28s;
    .message {
      padding: 0;
      font-size: 16px;
    }
    .close {
      color: $color-theme;
      padding-left: 24px;
      margin-left: auto;
      cursor: pointer;
    }
  }
</style>
