<template>
  <div class="do-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DoCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
