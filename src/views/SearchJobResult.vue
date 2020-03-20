<template>
  <div>
      <app-bar :showlogo="showlogo"></app-bar>
      <job-search></job-search>
  </div>
  
</template>

<script>
import AppBar from "@/components/AppBar";
import JobSearch from "@/components/JobSearch";
export default {
  name: "SearchJobResult",
  components: {
    AppBar,
    JobSearch
  },
  data() {
    return {
      showlogo: true
    };
  }
};
</script>