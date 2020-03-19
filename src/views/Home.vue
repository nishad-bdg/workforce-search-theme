<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col align="center">
        <v-img width="250" src="../assets/logo.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <search-bar></search-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar";
export default {
  name: "Home",
  components: {
    SearchBar
  }
};
</script>
