<template>
  <v-footer  color="#F7F9FF;" app dense>
    <v-card flat color="transparent" width="100%">
      <v-card-text align="center">
        <a
          href="#"
          class="footer-link mx-md-5 mx-sm-5 mx-2"
          v-for="footer in footerLinks"
          :key="footer.id"
        >{{footer.title}}</a>
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
    // localAttrs() {
    //   const attrs = {};

    //   if (this.variant === "default") {
    //     attrs.absolute = false;
    //     attrs.fixed = false;
    //   } else {
    //     attrs[this.variant] = true;
    //   }
    //   return attrs;
    // }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans&display=swap");
.footer-link {
  font-family: "Noto Sans" !important;
  text-decoration: none;
  color: #838CA3 !important;
  font-size: 16px !important;
}

@media screen and (max-width: 599px){
    .footer-link{
      font-size: 12px !important;
      
    }
}


</style>