import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
} from "../state/features/movies/tmbdApi";
import { incrementPage } from "../state/features/movies/movieSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const { page, searchQuery } = useSelector((state) => state.movies);
  const [allMovies, setAllMovies] = useState([]);

  const {
    data: popularData,
    isFetching: isLoadingPopular,
    error: errorPopular,
  } = useGetPopularMoviesQuery(page);

  const {
    data: searchData,
    isFetching: isLoadingSearch,
    error: errorSearch,
  } = useSearchMoviesQuery({ query: searchQuery, page });

  const movies = searchQuery ? searchData?.results : popularData?.results;
  const isLoading = searchQuery ? isLoadingSearch : isLoadingPopular;
  const error = searchQuery ? errorSearch : errorPopular;

  useEffect(() => {
    if (movies) {
      if (page === 1) {
        setAllMovies(movies);
      } else {
        setAllMovies((prev) => [...prev, ...movies]);
      }
    }
  }, [movies]);

  const loadMore = () => dispatch(incrementPage());

  if (isLoading && page === 1) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading movies.</p>;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {allMovies.map((movie) => (
          <div key={movie.id} className="bg-white p-2 shadow rounded">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded"
            />
            <h3 className="text-sm mt-2 font-semibold">{movie.title}</h3>
          </div>
        ))}
      </div>

      <div className="text-center mb-6">
        <button
          onClick={loadMore}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-3"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default MovieList;
