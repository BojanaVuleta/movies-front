import { createContext } from "react";

const MoviesContext = createContext({
  movies: [],
  postMovie: () => {},
  updateMovie: () => {},
});

export default MoviesContext;