<template>
  <div>
    <v-card flat color="transparent">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="10" md="8" sm="8" class="ml-md-5 ml-sm-5">
              <v-text-field v-model="keyword" class="keyword-2" outlined>
                <template slot="append">
                  <v-icon>fa-search</v-icon>
                  <v-icon class="ml-4">mdi-microphone</v-icon>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="8" sm="8" class="mt-n10 ml-md-5 ml-sm-5">
              <v-card color="transparent" flat>
                <div class="result-counter">About 112 results(0.21 seconds)</div>
              </v-card>
            </v-col>
            <!-- Search Results -->
            <v-col cols="12" md="8" sm="8">
              <v-row>
                <v-col>
                  <v-card flat v-for="result in results" :key="result.id" class="cv-results-card">
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar
                          size="70"
                          style="border:2px solid rgba(131, 140, 163, 0.20);"
                        >
                          <v-img :src="getProfileImg(result.id)"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-icon class="ml-n8 mt-12 mr-2">
                          <v-btn fab color="#0046FE"  height="20" width="20" class="message-btn">
                            <img width="10" src="../assets/icons/message.png">
                          </v-btn>
                        </v-list-item-icon>

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
                    <v-card-actions class="mt-n5">
                      <div>
                        <v-btn icon class="ml-n1" small>
                          <img width="15" src="../assets/icons/civie_logo.png" />
                        </v-btn>

                        <v-btn icon class="ml-n1" small>
                          <img width="17" src="../assets/icons/behance.png" />
                        </v-btn>

                        <v-btn icon class="ml-n1" small>
                          <img width="22" src="../assets/icons/linkedin.png" />
                        </v-btn>

                        <v-btn icon class="ml-n1" small>
                          <img width="15" src="../assets/icons/dribbble.png" />
                        </v-btn>
                      </div>
                      <div class="mx-8">
                        <v-btn icon class="ml-n1" small>
                          <img width="8" src="../assets/icons/facebook.png" />
                        </v-btn>

                        <v-btn icon small>
                          <v-icon color="#0046FE" small>mdi-instagram</v-icon>
                        </v-btn>

                        <v-btn icon small>
                          <v-icon color="#0046FE" small>mdi-whatsapp</v-icon>
                        </v-btn>
                        <v-btn icon class="ml-n1" small>
                          <img width="12" src="../assets/icons/pdf-download.png" />
                        </v-btn>
                      </div>
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
  name: "CvSearch",
  data() {
    return {
      keyword: "Software Developer",
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