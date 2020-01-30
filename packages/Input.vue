<template>
  <div class="do-input" :class="{'do-input--suffix':showSuffix}">
    <input class="do-input__inner"
    :type="showPassword ? (passwordVisible ? 'text':'password') : type"
    :placeholder="placeholder"
    :disabled="disabled"
    :name="name"
    :value="value"
    @input="handleInput"
    :class="{'is-disabled':disabled}">
    <span class="do-input__suffix" v-if="showSuffix">
      <i class="do-input__icon do-icon-circle-close" v-if="clearable && value" @click="clear"></i>
      <i class="do-input__icon do-icon-view" v-if="showPassword" @click="handlePassword" :class="{'do-icon-view-active':passwordVisible}"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'DoInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      // 把内容清空
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss">
.do-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .do-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.do-input--suffix {
  .do-input__inner {
    padding-right: 30px;
  }
  .do-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .do-icon-view-active {
      color: blue;
    }
  }

}
</style>
