<template>
  <div class="container">
    <h1>Sessions</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { http, path } from "../api";
// import MovieCard from "../components/MovieCard";

export default {
  name: "Home",
  // components: { MovieCard },
  data: () => ({
    sessions: []
  }),
  methods: {
    ...mapActions({
      setNotification: "ui/setNotification"
    })
  },
  created() {
    http.get(path.movieSessions.getAllMovieSessions()).then(fetchedSessions => {
      console.log(fetchedMovies.payload);
      this.sessions = fetchedSessions.payload;
      this.setNotification({
        type: "success",
        message: "Movies are loaded"
      });
    });
  }
};
</script>

<style>
</style>