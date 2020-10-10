<template>
  <div class="home">
    <ProfileHeader :picture-url="require('../assets/profile-pic.jpg')" name="Rodrigo Bosisio" />
    <div class="social-links">
      <IconLink
        :blank="true"
        label="LinkedIn"
        fa-icon="fab fa-linkedin"
        href="https://www.linkedin.com/in/rodrigobosisio/"
      />
      <IconLink
        :blank="true"
        label="GitHub"
        fa-icon="fab fa-github"
        href="https://github.com/rbosisio"
      />
      <IconLink label="Contato" fa-icon="far fa-envelope" href="#" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProfileHeader from '@/components/ProfileHeader.vue'; // @ is an alias to /src
import IconLink from '@/components/IconLink.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    ProfileHeader,
    IconLink,
  },
});
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;

  .social-links {
    display: flex;
    justify-content: center;

    & > * {
      margin-right: 15px;
    }
  }
}
</style>
