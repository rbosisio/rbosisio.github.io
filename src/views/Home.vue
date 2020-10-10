<template>
  <div class="home">
    <ProfileHeader :picture-url="require('../assets/profile-pic.jpg')" name="Rodrigo Bosisio" />
    <div class="home__social-links">
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
    <div class="home__skills">
      <h2>Skills</h2>
      <div class="home__skills__progress">
        <ProgressBar label="Back-end" progress="90" />
        <ProgressBar label="Front-end" progress="60" />
        <ProgressBar label="Cloud" progress="75" />
        <ProgressBar label="Agile" progress="85" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import IconLink from '@/components/IconLink.vue';
import ProfileHeader from '@/components/ProfileHeader.vue';
import ProgressBar from '@/components/ProgressBar.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    ProfileHeader,
    IconLink,
    ProgressBar,
  },
});
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;

  &__social-links {
    display: flex;
    justify-content: center;

    & > * {
      margin-right: 16px;
    }
  }

  &__skills {
    margin-top: 36px;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > h2 {
      margin-bottom: 24px;
    }

    &__progress {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      & > * {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
