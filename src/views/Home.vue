<template>
  <div class="home">
    <ProfileHeader :picture-url="require('../assets/profile-pic.jpg')" name="Rodrigo Bosisio" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProfileHeader from '@/components/ProfileHeader.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    ProfileHeader,
  },
});
</script>
