<template>
  <div class="do-form"><slot></slot></div>
</template>

<script>
export default {
  name: 'DoForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '60px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style>

</style>
