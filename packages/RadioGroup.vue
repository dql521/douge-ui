<template>
  <div class="do-radio-group"><slot></slot></div>
</template>

<script>
export default {
  name: 'DoRadioGroup',
  props: {
    value: null
  },
  provide () {
    return { RadioGroup: this }
  }
}
</script>

<style>

</style>
