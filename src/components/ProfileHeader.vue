<template>
  <div class="profile__header">
    <img
      width="180px"
      height="180px"
      :class="'profile__header__picture' + (loaded ? ' loaded' : '')"
      :src="pictureUrl"
      @load="onLoad"
    />
    <h1 class="profile__header__name">{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProfileHeader',
  props: {
    pictureUrl: String,
    name: String,
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
.profile__header {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__picture {
    border-radius: 50%;
    transition: opacity 0.6s ease-in-out;
    opacity: 0;

    &.loaded {
      opacity: 1;
    }
  }

  &__name {
    font-size: 24px;
  }
}
</style>
