import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_REACT_TMDB_API_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page = 1) => `movie/popular?api_key=${API_KEY}&page=${page}`,
    }),
    searchMovies: builder.query({
      query: ({ query, page = 1 }) =>
        `search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}&page=${page}`,
    }),
  }),
});

export const { useGetPopularMoviesQuery, useSearchMoviesQuery } = tmdbApi;
