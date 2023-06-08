import { API } from "../shared/api";

export const getMovies = () => {
  return API.get("/movies");
};

export const getMovie = (id) => {
  return API.get(`/movies/${id}`);
};

export const deleteMovie = (id) => {
  return API.delete(`/movies/${id}`);
};

export const postMovie = (
  title,
  director,
  image_url,
  duration,
  release_date,
  genre
) => {
  return API.post("/movies", {
    title,
    director,
    image_url,
    duration,
    release_date,
    genre,
  });
};

export const updateMovie = (
  title,
  director,
  image_url,
  duration,
  release_date,
  genre,
  id
) => {
  return API.put(`/movies/${id}`, {
    title,
    director,
    image_url,
    duration,
    release_date,
    genre,
  });
};
