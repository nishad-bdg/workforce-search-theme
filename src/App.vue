<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>

import AppFooter from './components/AppFooter'
export default {
  name: "App",
  components: {
    AppFooter,
  }
};
</script>

<style>
  @import url('./assets/css/custom.css');
</style>
