<template>
  <v-card flat color="transparent">
    <v-card-text>
      <v-container>
        <v-row align="center" justify="center">
          <v-col offset-md="2">
            <v-card flat color="transparent">
              <v-tabs height="35" v-model="dataTabs" class="parent-tab" hide-slider>
                <v-tab
                  v-for="tab in tabs"
                  :key="tab.id"
                  @click="currentTab = tab.id"
                  class="ct-tab-title text-capitalize mr-2"
                  :class="[
                        currentTab == tab.id ? 'active-tab' : '','ct-tab',
                        tab.id == 1 ? 'round-left' : '',
                        tab.id == 2 ? 'round-right' : '',
                    ]"
                >{{tab.title}}</v-tab>
              </v-tabs>
            </v-card>
            <v-row no-gutters>
              <v-col cols="10">
                <v-card flat>
                  <v-tabs-items v-model="dataTabs">
                    <v-tab-item v-for="tab in tabs" :key="tab.title">
                      <v-card flat>
                        <v-text-field
                          v-model="keyword"
                          class="keyword"
                          prepend-inner-icon="fa-search"
                          :append-icon="show ? 'mdi-microphone' : 'mdi-microphone-outline'"
                          outlined
                          @click:append="show = !show"
                        ></v-text-field>
                      </v-card>
                      <!-- Card For Suggestions -->
                      <v-card
                        flat
                        color="transparent"
                        class="mt-n9 hidden-xs-only"
                        v-if="suggestions"
                      >
                        <v-card-text align="center">
                          <search-suggestion></search-suggestion>
                        </v-card-text>
                      </v-card>
                      <v-card flat v-else class="mt-n2">
                        <suggestion-results></suggestion-results>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-col>
            </v-row>

          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import SearchSuggestion from "./SearchSuggestion";
import SuggestionResults from  './SuggestionResults'

export default {
  name: "SearchBar",
  components: {
    SearchSuggestion,
    SuggestionResults
  },
  props: ["suggestions"],
  data() {
    return {
      keyword: "",
      show: false,
      dataTabs: null,
      currentTab: null,
      tabs: [
        {
          title: "Search CV",
          id: 1
        },
        {
          title: "Search Job",
          id: 2
        }
      ]
    };
  }
};
</script>

<style>
  .keyword input{
    color:#838CA3 !important;
    font-size: 15px !important;
  }
</style>