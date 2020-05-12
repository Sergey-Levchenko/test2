<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center display-2 mb-10">Booking</h1>
        <h2 class="text-center display-1 mb-2">{{ movie.name }}</h2>
        <p class="text-center">
          Start time: {{ new Date(session.startTime).toLocaleTimeString() }}
        </p>
        <p class="text-center">Price: {{ session.ticketPrice }}</p>
        <div class="hall">
          <div
            class="hall__row"
            v-for="(row, i) in session.places"
            :key="`hall-row-${i}`"
          >
            <div
              :class="[
                `hall__place hall__place_${j + 1}`,
                {
                  active:
                    selectedPlace.row_id == i &&
                    selectedPlace.place_position == j
                }
              ]"
              v-for="(place, j) in row"
              :key="`hall-place-${i + j}`"
              v-html="j + 1"
              :style="{
                backgroundColor: place.isFree ? 'green' : 'red',
                cursor: place.isFree ? 'pointer' : 'auto'
              }"
              @click="placeHandler(i, j)"
            ></div>
          </div>
        </div>
        <transition name="fade">
          <v-card class="my-5" v-show="showBook" key="card">
            <v-card-title class="mb-5">Reservation place</v-card-title>
            <v-card-text class="pb-0">Selected:</v-card-text>
            <v-card-text
              >Row: {{ selectedPlace.row_id + 1 }}, place:
              {{ selectedPlace.place_position + 1 }}</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="orange" class="ma-3" @click="bookingPlace"
                >Reserve</v-btn
              >
            </v-card-actions>
          </v-card>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { http, path } from "../api";
import { getGenreName } from "../utils";

export default {
  name: "Booking",
  data: () => ({
    session: {},
    movie: {},
    selectedPlace: {}
  }),
  computed: {
    showBook() {
      return "row_id" in this.selectedPlace;
    }
  },
  methods: {
    ...mapActions({
      setNotification: "ui/setNotification"
    }),
    genreName(genreId) {
      return getGenreName(genreId);
    },
    placeHandler(row, place) {
      if (
        this.selectedPlace.row_id == row &&
        this.selectedPlace.place_position == place
      ) {
        this.selectedPlace = {};
        return;
      }
      if (this.session.places[row][place].isFree) {
        this.$set(this.selectedPlace, "movieShow_id", this.session._id);
        this.$set(this.selectedPlace, "row_id", row);
        this.$set(this.selectedPlace, "place_position", place);
        this.$set(this.selectedPlace, "isFree", true);
      }
    },
    bookingPlace() {
      http
        .post(path.movieSessions.postMovieSessionReserve(), this.selectedPlace)
        .then(response => {
          this.setNotification({
            type: "success",
            message: `Success! Reservation code: ${response.payload}`
          });
        });
    }
  },
  created() {
    Promise.all([
      http.get(
        path.movieSessions.getMovieSessionById(this.$route.params.movieId)
      ),
      http.get(path.movies.getMovieById(this.$route.params.movieId))
    ]).then(fetchAll => {
      this.session = fetchAll[0].payload;
      this.movie = fetchAll[1].payload;
      this.setNotification({
        type: "success",
        message: "Session is loaded"
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.hall {
  width: 100%;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  padding: 10px;
  &__row {
    height: 100%;
    display: flex;
  }
  &__place {
    width: 100%;
    height: 100%;
    height: 30px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
}
.hall__place.active {
  background-color: rgb(255, 255, 255) !important;
  color: #1b1b1b;
}
</style>
