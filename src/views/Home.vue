<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
        <v-card flat align="center" color="transparent">
          <v-card-text>
            <v-img width="25%" src="../assets/logo.png"></v-img>
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
import SearchBar from "@/components/SearchBar";
export default {
  name: "Home",
  components: {
    SearchBar
  }
};
</script>
