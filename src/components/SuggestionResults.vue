<template>
  <span>
    <v-card class="suggestion-card mb-3" flat v-for="result in results" :key="result.id">
      <v-list>
        <v-list-item three-line>
          <v-list-item-avatar size="80">
            <v-img :src="getProfileImg(result.id)"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <div class="cv-url">
              <a :href="result.cv_url">{{result.cv_url}}</a>
            </div>
            <div class="result-title">
              {{result.title}}
              <span>{{result.designation}}</span>
            </div>
            <v-list-item-subtitle>PHP . Java . Python . Angular JS</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </span>
</template>
<script>
export default {
  name: "SuggestionResults",
  data() {
    return {
      results: [
        {
          id: 1,
          title: "Conor Taylor .",
          designation: "Web Developer . Fulltime . $20,000 . Dublin",
          skills: "PHP . Java . Python . Angular JS",
          cv_url: "www.civ.ie/conortaylor"
        },
        {
          id: 2,
          title: "Conor Taylor .",
          designation: "Web Developer . Fulltime . $20,000 . Dublin",
          skills: "PHP . Java . Python . Angular JS",
          cv_url: "https://www.linkedin.com/in/david-watson-006bb8176/"
        },
        {
          id: 3,
          title: "Conor Taylor .",
          designation: "Web Developer . Fulltime . $20,000 . Dublin",
          skills: "PHP . Java . Python . Angular JS",
          cv_url: "www.civ.ie/conortaylor"
        }
      ]
    };
  },
  methods: {
    getProfileImg(id) {
      let image = require.context("../assets/", false, /\.png$/);
      return image("./" + id + ".png");
    }
  }
};
</script>

<style>
.suggestion-card {
  border: 2px solid #e5e5e5 !important;
  border-radius: 10px !important;
}

.cv-url {
  color: #0046fe !important;
  font-size: 15px;
  font-weight: 600;
}
.result-title {
  color: #002178;
  font-size: 1.2rem;
  font-weight: 600;
}
.result-title span {
  color: #838ca3;
}
</style>