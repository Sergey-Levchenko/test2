import Vue from 'vue'
import Vuex from 'vuex'
import movies from '@/store/movies'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movies: {
      namespaced: true,
      ...movies
    }
  },
  state: {},
  mutations: {},
  actions: {}
})