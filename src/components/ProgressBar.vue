<template>
  <div class="progress-bar">
    <span class="progress-bar__label" :v-if="!!label">{{ label }}</span>
    <div class="progress-bar__bar" :style="{ width: `${barSize}px` }">
      <div class="progress-bar__bar__filled" :style="{ width: `${progressWidth}px` }" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Img from './Img.vue';

export default Vue.extend({
  name: 'ProgressBar',
  props: {
    size: Number,
    progress: Number,
    label: String,
  },
  data() {
    return {
      progressWidth: 20,
    };
  },
  computed: {
    barSize(): Number {
      return Number(this.size) || 250;
    },
  },
  mounted() {
    setTimeout(() => {
      this.progressWidth = (Number(this.progress) * Number(this.barSize)) / 100;
    }, 1);
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.progress-bar {
  display: flex;
  align-items: center;

  &__label {
    font-size: 18px;
    font-weight: 600;
    margin-right: 15px;
  }

  &__bar {
    border-radius: 20px;
    background-color: lightgray;
    height: 20px;

    &__filled {
      position: absolute;
      border-radius: inherit;
      width: 0px;
      transition: all 1s ease-in-out;

      height: 20px;

      background-color: $color-primary;
    }
  }
}
</style>
