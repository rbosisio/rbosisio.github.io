<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">
        Home
      </router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-base-color;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $font-base-color;

    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}
</style>
