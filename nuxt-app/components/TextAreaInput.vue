<template>
  <div>
    <c-text-area
      :name="name"
      :value="value"
      :setValue="setValue"
      :placeholder="placeholder"
      :rows='rows'
    ></c-text-area>
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
    rows: Number,
  },
};
</script>

<style scoped>
/* styles here */
</style>