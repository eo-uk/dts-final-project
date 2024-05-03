<template>
  <div>
    <c-text-input
      :name="name"
      :value="value"
      :setValue="setValue"
      :placeholder="placeholder"
    ></c-text-input>
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
  },
};
</script>

<style scoped>
/* styles here */
</style>