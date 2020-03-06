<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center display-2 mb-7">Search</h1>
      </v-col>
      <v-col class="d-flex justify-space-between" cols="12">
        <v-checkbox
          v-model="checkbox[i-1]"
          v-for="i in 5"
          :key="`checkbox${i}`"
          :label="genreName(i-1)"
          class="mr-5"
        ></v-checkbox>
      </v-col>
      <v-col class="d-flex" cols="12">
        <v-text-field v-model="textQuery" label="Input film name" single-line></v-text-field>
      </v-col>
      <v-col class="d-flex justify-center" cols="12">
        <v-btn @click="startSearch">Search</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="Boolean(movies.length)">
      <MovieCard v-for="movie in movies" :key="`movie-${movie._id}`" :movie="movie" />
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { getGenreName } from "../utils";
import { http, path } from "../api";
import MovieCard from "../components/MovieCard";
export default {
  name: "Search",
  components: { MovieCard },
  data: () => ({
    movies: [],
    textQuery: "",
    genreQuery: "",
    checkbox: [false, false, false, false, false]
  }),
  methods: {
    ...mapActions({
      setNotification: "ui/setNotification"
    }),
    genreName(genreId) {
      return getGenreName(genreId);
    },
    startSearch() {
      http
        .get(path.movies.getMovieByNameOrGenre(this.textQuery, this.genreQuery))
        .then(fetchedMovies => {
          this.movies = fetchedMovies.payload;
          this.setNotification({
            type: "success",
            message: "Movies are loaded"
          });
        });
    }
  },
  watch: {
    checkbox(val) {
      this.genreQuery = val
        .reduce((acc, item, i) => {
          if (item) acc.push(i);
          return acc;
        }, [])
        .join(",");
    }
  }
};
</script>

<style>
</style>