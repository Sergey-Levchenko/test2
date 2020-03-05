const path = {
    movies: {
        getAllMovies: () => '/movies',
        getMovieById: id => `/movies?movie_id=${id}`,
        getMovieByNameOrGenre: (name, genre) => `/movies/find?name=${name}&genres=${genre}`
    },
    movieSessions: {
        getAllMovieSessions: () => '/movieShows',
        getMovieSessionById: id => `/movieShows?movie_id=${id}`,
        postMovieSessionReserve: () => `/bookingPlace`,
    }
};

export default path;
