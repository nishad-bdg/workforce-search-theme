<template>
  <v-container class="search-alert">
    <v-row>
      <v-col cols="6">
        <v-card flat color="transparent">
          <div class="job-title">Job Title</div>
          <v-autocomplete
              v-model="searchData"
              :items="searchItems"
              filled
              chips
              color="blue-grey lighten-2"
              item-text="name"
              item-value="name"
              multiple
              dense
              outlined
              append-icon=""
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  label
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
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
    data () {
      return {
        autoUpdate: true,
        searchData: [],
        isUpdating: false,
        name: 'Midnight Crew',
        searchItems: [
          { header: 'D' },
          { name: 'Django', group: 'D'},
          { divider: true },
          { header: 'S' },
          { name: 'Senior Developer', group: 'S'},
          { name: 'Sr. Art Director', group: 'S'},
          { name: 'Sr. Illustrator', group: 'S'},
          { divider: true },
          { header: 'Y' },
          { name: 'Young talent', group: 'Y'},
          { divider: true },
        ],
        title: 'The summer breeze',
      }
    },

    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },

    methods: {
      remove (item) {
        const index = this.searchData.indexOf(item.name)
        if (index >= 0) this.searchData.splice(index, 1)
      },
    },
  }
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
</style>
