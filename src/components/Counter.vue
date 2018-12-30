<template>
  <div class="sim-counter">
    <div class="sim-counter__body">
      <i class="sim-counter__sub" @click="handleSubClick">
        <img class="sim-counter__icon" src="../assets/images/icon_decrease.png">
      </i>
      <input
        type="number"
        :max="max"
        :min="min"
        :value="count"
        :readonly="readonly"
        @input="handleInput"
        @blur="handleBlur"
        class="sim-counter__input"
      >
      <i class="sim-counter__plus" @click="handlePlusClick">
        <img class="sim-counter__icon" src="../assets/images/icon_increase.png">
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimCounter',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    readonly: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 999
    },
    min: {
      type: Number,
      default: 0
    }
  },
  computed: {
    count: {
      get() {
        return this.value
      },
    }
  },
  methods: {
    handleInput(e) {
      let value = +e.target.value

      this.$emit('input', value)
    },
    handleSubClick() {
      const val = this.value - 1 < this.min ? this.min : this.value - 1
      this.$emit('input', val)
    },
    handlePlusClick() {
      const val = this.value + 1 > this.max ? this.max : this.value + 1
      this.$emit('input', val)
    },
    handleBlur() {
      if (this.value === '' || this.value < 0) this.$emit('input', this.min)

      if (this.value > this.max) this.$emit('input', this.max)
    }
  },
}
</script>

<style lang="less" scoped>
  // .rotate-enter-active, .rotate-leave-active {
  //   transition: all .3s;
  // }
  // .rotate-enter, .rotate-leave-to {
  //   opacity: 0;
  //   transform: translate3d(40px, 0, 0) rotateZ(360deg);
  // }

  .sim-counter {
    &__body {
      font-size: 0;
      display: flex;
      align-items: center;
    }
    &__sub, &__plus {
      display: block;
      font-size: 0;
      width: 40px;
      height: 40px;
    }
    &__icon {
      width: 100%;
      height: 100%;
      border: 0;
    }
    &__input {
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      background: transparent;
      border: 0;
      width: 56px;
      font-size: 32px;
      text-align: center;
      margin: 0 10px;
      padding: 0;
    }
  }
</style>