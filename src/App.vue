<template>
  <v-app>
    <Header />

    <v-content>
      <router-view />
    </v-content>

    <Notification />
    <Loader />
  </v-app>
</template>

<script>
import Loader from "@/components/Loader";
import Notification from "@/components/Notification";
import Header from "@/components/Header";
export default {
   name: "App",

  components: { Header, Loader, Notification },
  methods: {}
};
</script>
