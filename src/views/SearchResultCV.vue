<template>
  <div>
      <app-bar :showlogo="showlogo"></app-bar>
      <cv-search></cv-search>
  </div>
  
</template>

<script>
import AppBar from "@/components/AppBar";
import CvSearch from "@/components/CvSearch";
export default {
  name: "SearchResultCV",
  components: {
    AppBar,
    CvSearch
  },
  data() {
    return {
      showlogo: true
    };
  }
};
</script>