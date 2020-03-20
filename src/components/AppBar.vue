<template>
  <div>
    <v-app-bar color="transparent" light flat class=""  height="90" app>
      <v-img
        v-if="showlogo"
        class="mx-2"
        src="../assets/logo.png"
        max-height="40"
        max-width="200"
        contain
      ></v-img>
      <v-spacer></v-spacer>
      <!-- Profile Pic -->
      <div class="d-flex align-center">
        <v-badge color="#42B72A" overlap dot offset-x="14">
          <v-avatar>
            <v-img src="../assets/profile-img.png"></v-img>
          </v-avatar>
        </v-badge>
      </div>
      <!-- Profile Pic -->
    </v-app-bar>
  </div>
</template>
<script>
export default {
  props: ["showlogo"]
};
</script>