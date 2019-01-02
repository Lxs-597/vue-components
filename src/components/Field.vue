<template>
  <div class="sim-field" :class="{'sim-field__active': isLink}" @click="handleFieldClick">
    <div class="sim-field__title">
      <span>{{ title }}</span>
    </div>
    <div class="sim-field__value">
      <input
        type="text"
        class="sim-field__control"
        autocomplete="off"
        :readonly="readonly"
        :value="value"
        :placeholder="placeholder"
        :maxlength="maxLength"
        @input="handleInput"
      >
    </div>
    <div class="sim-field__link" v-if="isLink">
      <img class="sim-field__link-icon" src="../assets/images/icon_arrow_r.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimField',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number],
    title: {
      type: String,
      default: '标题'
    },
    placeholder: String,
    isLink: {
      type: Boolean,
      default: false
    },
    maxLength: Number
  },
  computed: {
    readonly() {
      return this.isLink
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    handleFieldClick(e) {
      this.$emit('click')
      if (this.readonly) e.target.blur()
    }
  },
}
</script>

<style lang="less" scoped>
  .sim-field {
    background: #fff;
    padding: 32px 28px;
    display: flex;
    align-items: center;
    &__active:active {
      background: rgba(#000, .01);
    }
    &__title {
      font-size: 28px;
      font-weight: 500;
    }
    &__value {
      flex: 1;
      margin-left: 10px;
    }
    &__control {
      display: block;
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      border: 0;
      outline: none;
      background: transparent;
      padding: 0 0 0 10px;
      line-height: normal;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      cursor: text;
      ::placeholder {
        color: #999;
      }
      &:disabled {
        &::placeholder {
          color: #333;
        }
      }
    }
    &__link {
      width: 16px;
      height: 28px;
      margin-left: 20px;
      font-size: 0;
      &-icon {
        border: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>