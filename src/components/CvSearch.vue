<template>
  <div>
    <v-card flat color="transparent">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="8" sm="12">
              <v-text-field v-model="keyword" class="keyword-2" outlined>
                <template slot="append">
                  <v-icon>fa-search</v-icon>
                  <v-icon class="ml-4">mdi-microphone</v-icon>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="8" sm="12" class="mt-n10">
              <v-card color="transparent" flat>
                <div class="result-counter">About 112 results(0.21 seconds)</div>
              </v-card>
            </v-col>
            <!-- Search Results -->
            <v-col cols="12">
              <v-row>
                <v-col>
                  <v-card flat v-for="result in results" :key="result.id">
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar size="60">
                          <v-img :src="getProfileImg(result.id)"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <div class="cv-url">
                            <a :href="result.cv_url">{{result.cv_url}}</a>
                          </div>
                          <div class="result-title">
                            {{result.title}}
                            {{result.designation}}
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-card-text class="mt-n6">
                      <div class="mb-n1 time-slot">{{result.time_slot}}</div>
                      <div class="time-slot">{{result.skills}}</div>
                    </v-card-text>
                    <v-card-actions>
                      
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <!-- Search Results -->
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SuggestionResults",
  data() {
    return {
      keyword: "",
      show: false,
      results: [
        {
          id: 1,
          title: "Conor Taylor .",
          designation: "Web Developer .",
          time_slot: "Fulltime . $20,000 . Dublin",
          skills: "PHP . Java . Python . Angular JS",
          cv_url: "https://github.com/hasinhayder/LearnWithHasinHayder"
        },
        {
          id: 2,
          title: "Conor Taylor .",
          designation: "Web Developer .",
          time_slot: "Fulltime . $20,000 . Dublin",
          skills: "PHP . Java . Python . Angular JS",
          cv_url: "https://github.com/hasinhayder/LearnWithHasinHayder"
        },
        {
          id: 3,
          title: "Conor Taylor .",
          designation: "Web Developer .",
          time_slot: "Fulltime . $20,000 . Dublin",
          skills: "PHP . Java . Python . Angular JS",
          cv_url: "https://github.com/hasinhayder/LearnWithHasinHayder"
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