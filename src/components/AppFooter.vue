<template>
  <v-footer v-bind="localAttrs" color="#F7F9FF;" app dense>
    <v-card flat color="transparent" width="100%">
      <v-card-text align="center">
        <a href="#" v-for = "footer in footerLinks" :key="footer.id" class="mr-2">{{footer.title}}</a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerLinks: [
        { title: "About", id: 1 },
        { title: "How Search Works", id: 2 },
        { title: "Privacy", id: 3 },
        { title: "Terms", id: 4 },
        { title: "Settings", id: 5 }
      ]
    };
  },
  computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
  }
};
</script>