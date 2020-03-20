<template>
    <v-container fill-height fluid>
      <app-bar :showlogo=showlogo></app-bar>
      <v-row align="center" justify="center">
        <v-col>
          <v-card flat align="center" color="transparent">
            <v-card-text>
              <v-img class="logo" src="../assets/logo.png"></v-img>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="mt-n12" cols="12">
          <search-bar></search-bar>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/AppBar'
import SearchBar from "@/components/SearchBar";
export default {
  name: "Home",
  components: {
    SearchBar,
    AppBar,
  },
  data(){
    return{
      showlogo:true,
    }
  }
};
</script>

<style>
.logo {
  width: 25% !important;
}

@media screen and (max-width: 959px) {
  .logo {
    width: 35% !important;
  }
}
</style>
