<template>
  <div>
    <c-select-input
      :name="name"
      :value="value"
      :setValue="setValue"
      :placeholder="placeholder"
      :options="options"
    ></c-select-input>
  </div>
</template>

<script>
import 'web-components-lib/lib.mjs';

export default {
  props: {
    name: String,
    value: String,
    setValue: Function,
    placeholder: String,
    options: Array,
    extraStyle: String,
  },
};
</script>

<style scoped>
/* styles here */
</style>