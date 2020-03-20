<template>
  <div>
    <v-card flat color="transparent">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="8" sm="12" class="ml-5">
              <v-text-field v-model="keyword" class="keyword-2" outlined>
                <template slot="append">
                  <v-icon>fa-search</v-icon>
                  <v-icon class="ml-4">mdi-microphone</v-icon>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="8" sm="12" class="mt-n12 ml-5">
              <v-card color="transparent" flat>
                <div class="result-counter">About 112 results(0.21 seconds)</div>
              </v-card>
            </v-col>
            <!-- Search Results -->
            <v-col cols="12" md="8" sm="12">
              <v-row>
                <v-col>
                  <v-card flat v-for="result in results" :key="result.id" class="cv-results-card">
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar
                          size="60"
                          style="border:2px solid rgba(131, 140, 163, 0.20);"
                        >
                          <v-img contain :src="getProfileImg(result.logo)"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <div class="job-search-title">
                            <a href="#">{{result.title}}</a>
                            <span class="time-slot ml-2">{{result.duration}}</span>
                          </div>
                          <div class="job-search-company-name">{{result.company_name}}</div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-card-text class="mt-n6">
                      <div class="mb-n1 time-slot">{{result.time_slot}}</div>
                      <div class="time-slot">{{result.skills}}</div>
                    </v-card-text>
                    <v-card-actions class="mt-n5 ml-4">
                      <div>
                        <v-btn icon disabled class="mr-6" small>
                          <img class="mx-1" width="14" src="../assets/icons/eye.png" />
                          <span class="time-slot">350</span>
                        </v-btn>

                        <v-btn icon disabled small>
                          <img class="mx-1" width="14" src="../assets/icons/arrow.png" />
                          <span class="time-slot">35</span>
                        </v-btn>
                      </div>

                      <div class="ml-8">
                        <v-btn icon class="" small>
                          <img class="mx-1" width="15" src="../assets/icons/dribbble.png" />
                        </v-btn>

                        <v-btn icon class="" small>
                          <img class="mx-1" width="15" src="../assets/icons/phone-outgoing.png" />
                        </v-btn>

                        <v-btn icon class="" small>
                          <img class="mx-1" width="15" src="../assets/icons/mail.png" />
                        </v-btn>
                      </div>
                    </v-card-actions>
                    <v-card-actions class="mt-n2 ml-2">
                        <div class="apply-now">
                            <a href="#">Apply Now</a>
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
  name: "JobSearch",
  data() {
    return {
      keyword: "Software Developer",
      show: false,
      results: [
        {
          id: 1,
          title: "Senior UI/UX Designer",
          duration: "6 days left",
          company_name: "Tectonic Software",
          time_slot: "Fulltime . $20,000 . Dublin",
          skills: "Photoshop . Illustrator . After Effect . Figma",
          logo: "tectonic"
        },
        {
          id: 1,
          title: "Senior UI/UX Designer",
          duration: "6 days left",
          company_name: "Tectonic Software",
          time_slot: "Fulltime . $20,000 . Dublin",
          skills: "Photoshop . Illustrator . After Effect . Figma",
          logo: "tectonic"
        },
        {
          id: 1,
          title: "Senior UI/UX Designer",
          duration: "6 days left",
          company_name: "Tectonic Software",
          time_slot: "Fulltime . $20,000 . Dublin",
          skills: "Photoshop . Illustrator . After Effect . Figma",
          logo: "tectonic"
        }
      ]
    };
  },
  methods: {
    getProfileImg(logo) {
      let image = require.context("../assets/", false, /\.png$/);
      return image("./" + logo + ".png");
    }
  }
};
</script>