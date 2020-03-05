<template>
  <header class="header">
    <v-app-bar tag="nav" app color="primary" dark>
      <v-btn dark text to="/" exect class="mr-5">home</v-btn>
      <!-- <v-btn dark text to="/sessions" exect>sessions</v-btn> -->
      <v-spacer></v-spacer>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
  })
};
</script>

<style lang="scss" scoped>
</style>
