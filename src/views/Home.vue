<template>
    <v-container fill-height fluid>
      <app-bar :showlogo=showlogo></app-bar>
      <v-row align="center" justify="center">
        <v-col>
          <v-card flat align="center" color="transparent">
            <v-card-text>
              <v-img contain class="logo" src="../assets/logo.png"></v-img>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="mt-n12" cols="12">
          <search-bar :suggestions=suggestions></search-bar>
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
      showlogo:false,
      suggestions:true,
    }
  }
};
</script>


