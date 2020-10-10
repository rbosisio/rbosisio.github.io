<template>
  <a :href="href" :target="blank ? '_blank' : null" class="icon-link">
    <i :class="faIcon"></i>
    <span class="icon-link__label">{{ label }}</span>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IconLink',
  props: {
    blank: Boolean,
    faIcon: String,
    icon: String,
    href: String,
    label: String,
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.icon-link {
  cursor: pointer;
  color: $font-base-color;

  &__label {
    margin-left: 5px;
    font-size: 14px;
    border-bottom: 1px solid $color-primary;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-bottom-width: 4px;
    }
  }

  &:link {
    text-decoration: none;
  }

  &:visited {
    color: inherit;
    text-decoration: none;
  }
}
</style>
