<template>
  <div>
   
    <v-card flat color="transparent">
      <v-card-text>
        <v-tabs height="35" v-model="dataTabs" class="parent-tab" hide-slider>
          <v-tab
            v-for="tab in tabs"
            :key="tab.id"
            @click="currentTab = tab.id"
            class="ct-tab-title text-capitalize mx-2"
            :class="[
                        currentTab == tab.id ? 'active-tab' : '','ct-tab',
                        tab.id == 1 ? 'round-left' : '',
                        tab.id == 2 ? 'round-right' : '',
                    ]"
          >{{tab.title}}</v-tab>
          <!-- tabs -->
        </v-tabs>
        <!-- Tab items -->
        <v-tabs-items v-model="dataTabs">
          <v-tab-item>
            <v-text-field v-model="keyword" class="keyword" outlined></v-text-field>
          </v-tab-item>

          <v-tab-item>Tab2</v-tab-item>
        </v-tabs-items>
        <!-- Tab Items -->
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
</style>