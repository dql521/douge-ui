<template>
  <div class="do-form-item">
    <label class="do-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="do-form-item__content">
      <slot></slot>
    </div>
</div>
</template>

<script>
export default {
  name: 'DoFormItem',
  props: {
    label: {
      type: String
    }
  },
  inject: ['Form']
}
</script>

<style lang="scss">
.do-form-item {
  margin-bottom: 25px;
  .do-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .do-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
