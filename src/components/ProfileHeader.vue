<template>
  <div class="profile__header">
    <Img width="180px" height="180px" class="profile__header__picture" :src="pictureUrl" />
    <h1 class="profile__header__name">{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Img from './Img.vue';

export default Vue.extend({
  name: 'ProfileHeader',
  components: {
    Img,
  },
  props: {
    pictureUrl: String,
    name: String,
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
  }

  &__name {
    font-size: 24px;
  }
}
</style>
