<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col align="center" cols="12">
        <v-img width="260" src="../assets/logo.png"></v-img>
      </v-col>
      <v-col class="mt-n12">
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
