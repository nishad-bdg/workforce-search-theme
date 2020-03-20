<template>
  <v-app>
    <app-bar></app-bar>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import AppFooter from './components/AppFooter'
export default {
  name: "App",
  components: {
    AppBar,
    AppFooter,
  }
};
</script>
<style>
  
</style>
