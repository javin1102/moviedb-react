import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favouriteMovies: [],
    totalFavourite: 0,
  },

  reducers: {
    toggleFavouriteMovie(state, action) {
      const movie = action.payload;

      const existingMovie = state.favouriteMovies.find(
        (mov) => mov.id === movie.id
      );
      if (!existingMovie) {
        state.favouriteMovies.push(movie);
      } else {
        state.favouriteMovies = state.favouriteMovies.filter(
          (mov) => mov.id !== movie.id
        );
      }
    },
  },
});

export const favouriteAction = favouriteSlice.actions;
export default favouriteSlice;
