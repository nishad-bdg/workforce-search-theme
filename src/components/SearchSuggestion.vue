<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="suggestion-link">Try This:</v-col>
      <v-col v-for="suggestion in suggestions" :key="suggestion.id">
        <a href="#" class="suggestion-link">{{suggestion.title}}</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchSuggestion",
  data() {
    return {
      suggestions: [
        {
          title: "ios developer",
          id: 1
        },
        {
          title: "Illustrator",
          id: 2
        },
        {
          title: "Landing Page",
          id: 3
        },
        {
          title: "Website design",
          id: 4
        },
        {
          title: "Mobile app",
          id: 5
        },
        {
          title: "Dashboard",
          id: 6
        },
        {
          title: "Logo",
          id: 7
        }
      ]
    };
  }
};
</script>

<style>
.suggestion-link {
  font-family: "Noto Sans", sans-serif !important;
  color: #838ca3 !important;
  font-size: 0.9vw;
}
</style>