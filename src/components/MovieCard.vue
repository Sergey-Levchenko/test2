<template>
  <v-col cols="4">
    <v-card min-width="350px" class="card">
      <v-img class="white--text align-end" height="300px" :src="movie.pictureLink"></v-img>

      <v-card-title class="mb-4">{{movie.name}}</v-card-title>
      <v-card-subtitle class="pb-0">{{getDate(movie.dateOfRelease)}}</v-card-subtitle>

      <v-card-text tag="ul" class="text--primary genres">
        <li v-for="(genre, i) in movie.genre_id" :key="`genre-${genre}`">
          {{ genreName(genre) }}
          <span v-if="i!=movie.genre_id.length-1">/</span>
        </li>
      </v-card-text>
      <v-card-text class="text--primary description">
        <p>{{ movie.description }}</p>
      </v-card-text>

      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn color="orange" text @click="goToMoviePage">open</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { getGenreName, getLocaleDate } from "../utils";

export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    genreName(genreId) {
      return getGenreName(genreId);
    },
    getDate(date) {
      return getLocaleDate(date);
    },
    goToMoviePage() {
      this.$router.push(`/movie/${this.movie._id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 600px;
}
.genres {
  li {
    display: inline-block;
    font-size: 11px;
    margin-right: 3px;
  }
}
.description {
  height: 103px;
  overflow: hidden;
}
</style>
