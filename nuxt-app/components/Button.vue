<template>
  <div>
    <c-button
        @click="handleClick"
        :text="text"
        :extraStyle="extraStyle"
    ></c-button>
  </div>
</template>

<script>
import 'web-components-lib/lib.mjs';

export default {
  props: {
    extraStyle: String,
    text: String,
    onClick: Function,
  },

  methods: {
    handleClick(e) {
        this.onClick();
    },
  },
};
</script>

<style scoped>
/* styles here */
</style>