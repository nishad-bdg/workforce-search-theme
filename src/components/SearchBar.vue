<template>
  <div>
    <v-card flat color="transparent">
      <v-card-text>
        <v-container>
          <v-row>
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
                      <v-tab-item>
                        <v-text-field
                          v-model="keyword"
                          class="keyword"
                          prepend-inner-icon="mdi-email"
                          :append-icon="show ? 'mdi-microphone' : 'mdi-microphone-outline'"
                          outlined
                          @click:append = "show = !show"
                        ></v-text-field>
                      </v-tab-item>

                      <v-tab-item>Tab2</v-tab-item>
                    </v-tabs-items>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      keyword: "",
      show:false,
      dataTabs: null,
      currentTab: null,
      tabs: [
        { title: "Search CV", id: 1 },
        { title: "Search Job", id: 2 }
      ]
    };
  }
};
</script>


<style>
.ct-tab {
  background-color: #fdfdfd !important;
  color: #838ca3 !important;
  border: 2px solid #ebeff5 !important;
  box-sizing: border-box !important;
  border-radius: 10px 10px 0px 0px !important;
}
.ct-tab-title {
  font-size: 0.8rem !important;
  font-weight: 400 !important;
}

.active-tab {
  background-color: #4e6ef1;
  color: #0046fe !important;
}

.v-text-field {
  margin-top: -1px !important;
  background: #fdfdfd !important;
  border-radius: 0px 10px 10px 10px !important;
}
</style>