<template>
  <div class="home">
    <v-container>
      <v-row v-if="Boolean(movies.length)">
        <MovieCard v-for="movie in movies" :key="`movie-${movie._id}`" :movie="movie" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { http, path } from "../api";
import MovieCard from "../components/MovieCard";

export default {
  name: "Home",
  components: { MovieCard },
  data: () => ({
    movies: []
  }),
  methods: {
    ...mapActions({
      setNotification: "ui/setNotification"
    })
  },
  created() {
    http.get(path.movies.getAllMovies()).then(fetchedMovies => {
      this.movies = fetchedMovies.payload;
      this.setNotification({
        type: "success",
        message: "Movies are loaded"
      });
    });
  }
};
</script>
