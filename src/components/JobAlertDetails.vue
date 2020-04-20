<template>
  <v-container class="search-alert">
    <v-row>
      <v-col cols="6">
        <v-card flat color="transparent">
          <div class="job-title">Job Title</div>
          <v-autocomplete
            id="job-search-input"
            class="custom-search-box"
            v-model="searchData"
            :items="searchItems"
            chips
            color="#EBEFF5"
            item-text="name"
            item-value="name"
            multiple
            outlined
            append-icon
          >
            <template v-slot:selection="data">
              <v-chip
                v-bind="data.attrs"
                :input-value="data.selected"
                color="#EBEFF5"
                text-color="#838CA3"
                label
                @click="data.select"
              >{{ data.item.name }}</v-chip>
            </template>
            <template v-slot:item="data">
              <template v-if="typeof data.item !== 'object'">
                <v-list-item-content class="search-results" v-text="data.item"></v-list-item-content>
              </template>
              <template v-else>
                <v-list-item-content>
                  <v-list-item-title v-html="data.item.name"></v-list-item-title>
                </v-list-item-content>
              </template>
            </template>
          </v-autocomplete>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      autoUpdate: true,
      searchData: [],
      isUpdating: false,
      name: "Midnight Crew",
      searchItems: [
        { header: "S" },
        { name: "Senior Developer", group: "S" },
        { name: "Sr. Art Director", group: "S" },
        { header: "Y" },
        { name: "Young talent", group: "Y" }
      ],
      title: "The summer breeze"
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
.job-title {
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  line-height: 18px;
  color: #838ca3;
  padding: 5px;
}
.custom-search-box {
  border-radius: 10px 10px 0 0;
}
.v-list-item__title{
  color: #838CA3 !important;
}
</style>

<style>
.v-menu__content.theme--light.menuable__content__active.v-autocomplete__content {
  border-radius: 0 0 10px 10px;
  border: 2px solid #ebeff5;
  box-shadow: none !important;
  margin-top: -3px;
}
.v-select.v-text-field input{
  color:#838CA3;
}
</style>

