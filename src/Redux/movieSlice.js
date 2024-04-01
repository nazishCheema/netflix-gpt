import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: `movies`,
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    movieTrailer: null,
    movieId: null,
    toggleMovie: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addMovieVideo: (state, action) => {
      state.movieId = action.payload;
    },
    toggleMovieView: (state) => {
      state.toggleMovie = !state?.toggleMovie;
    },
  },
});
export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  addTrailer,
  addMovieVideo,
  toggleMovieView,
} = movieSlice.actions;
export default movieSlice.reducer;
