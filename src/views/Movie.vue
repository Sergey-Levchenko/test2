<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <div class="image-wrapper">
          <img :src="movie.pictureLink" :alt="movie.name" class="image" />
        </div>
      </v-col>
      <v-col cols="7">
        <h1 class="text-uppercase display-2" @click="test">{{movie.name}}</h1>
        <p class="font-weight-thin date font-italic pb-0 mb-0 mt-5">{{getDate(movie.dateOfRelease)}}</p>

        <ul class="genres mb-10">
          <li v-for="(genre, i) in movie.genre_id" :key="`genre-${genre}`">
            {{ genreName(genre) }}
            <span v-if="i!=movie.genre_id.length-1">/</span>
          </li>
        </ul>
        <p class="text--primary description">{{ movie.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { http, path } from "../api";
import MovieCard from "../components/MovieCard";
import { getGenreName, getLocaleDate } from "../utils";

export default {
  name: "Movie",
  components: { MovieCard },
  data: () => ({
    movie: {}
  }),
  methods: {
    ...mapActions({
      setNotification: "ui/setNotification"
    }),
    genreName(genreId) {
      return getGenreName(genreId);
    },
    getDate(date) {
      return getLocaleDate(date);
    },
    test() {
      console.log(this.movie);
    }
  },
  created() {
    http
      .get(path.movies.getMovieById(this.$route.params.movieId))
      .then(fetchedMovie => {
        this.movie = fetchedMovie.payload;
        this.setNotification({
          type: "success",
          message: "Movie is loaded"
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  max-width: 100%;
}
.date {
}
.genres {
  padding: 0;
  li {
    display: inline-block;
    font-size: 11px;
    margin-right: 3px;
  }
}
</style>
