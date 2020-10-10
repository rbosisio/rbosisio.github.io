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
  computed: {
    barSize(): Number {
      return Number(this.size) || 250;
    },
    progressWidth(): Number {
      const currentProgress = (Number(this.progress) * Number(this.barSize)) / 100;
      return currentProgress;
    },
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

      height: 20px;

      background-color: $color-primary;
    }
  }
}
</style>
