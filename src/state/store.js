import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "./features/movies/tmbdApi";
import movieReducer from "./features/movies/movieSlice";

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
