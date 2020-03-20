<template>
  <span>
    <v-card class="suggestion-card mb-3" flat v-for="result in results" :key="result.id">
      <v-list>
        <v-list-item three-line>
          <v-list-item-avatar size="80">
            <v-img src="../assets/1.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <div class="cv-url">
              <a href="www.civ.ie/conortaylor">www.civ.ie/conortaylor</a>
            </div>
            <div class="result-title">
              Conor Taylor . Web Developer .
              <span>Fulltime . $20,000 . Dublin</span>
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
          title: "Conor Taylor . Web Developer . Fulltime . $20,000 . Dublin",
          skills: "PHP . Java . Python . Angular JS",
          cv_url: 'www.civ.ie/conortaylor'
        },
        {
          id: 2,
          title: "Conor Taylor . Web Developer . Fulltime . $20,000 . Dublin",
          skills: "PHP . Java . Python . Angular JS"
        }
      ]
    };
  },
  methods: {
    getProfileImg(id) {
      let image = require.context(
        "../assets/",
        false,
        /\.png$/
      );
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