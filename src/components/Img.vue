<template>
  <img
    :width="width"
    :height="height"
    :class="{ image: true, classProp, loaded }"
    :src="src"
    @load="onLoad"
  />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Img',
  props: {
    classProp: String,
    width: String,
    height: String,
    src: String,
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    onLoad() {
      this.loaded = true;
    },
  },
});
</script>

<style scoped lang="scss">
.image {
  transition: opacity 0.6s ease-in-out;
  opacity: 0;

  &.loaded {
    opacity: 1;
  }
}
</style>
