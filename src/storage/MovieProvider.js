import { useEffect, useState } from "react";
import MoviesContext from "./MoviesContext";
import { getMovies, postMovie } from "../service/moviesService";

const MovieProvider = ({ children }) => {
  const [movieState, setMovieState] = useState([]);

  const postNewMovie = (movie) => {
    postMovie(movie).then(({ data }) => {
      setMovieState((prevState) => [...prevState, data]);
    });
  };

  const movieContext = {
    movies: movieState,
    postMovie: postNewMovie,
    updateMovie: setMovieState,
  };

  return (
    <MoviesContext.Provider value={movieContext}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MovieProvider;