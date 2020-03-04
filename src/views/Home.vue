<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="4" v-for="(item, i) in getMovies" :key="`movie_${i}`">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" :src="item.pictureLink"></v-img>

            <v-card-title>{{item.name}}</v-card-title>
            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>Share</v-btn>

              <v-btn color="orange" text>Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("movies");

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapGetters(["getMovies"])
  },
  mounted() {
    const response = this.axios.get("/movies").then(res => {
      // console.log(res.data[0]);
      // console.log(new Date(res.data[0].dateOfRelease).getTime());
    });
  }
};
</script>
