import Vue from "vue";

const movies = {
    state: {
        movies: ['ssssss']
    },
    mutations: {
        SET_MOVIES(state, payload) {
            console.log(payload[0]);
            state.movies = payload
        }
    },
    actions: {
        async setMovies(vm) {
            await Vue.axios.get('/movies')
                .then(res => {
                    vm.commit('SET_MOVIES', res.data)
                })
        }
    },
    getters: {
        getMovies: (state) => state.movies
    }
}

export default movies;