import { useState, useEffect } from "react";
import { postMovie, updateMovie } from "../service/moviesService";
import { getMovie, editMovie } from "../service/moviesService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    image_url: "",
    duration: "",
    release_date: "",
    genre: "",
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getMovie(id).then(({ data }) => {
        setMovie(data);
        console.log(data);
      });
    }
  }, []);

  const handleTitleInputChange = (e) => {
    setMovie((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const handleDirectorInputChange = (e) => {
    setMovie((prevState) => {
      return { ...prevState, director: e.target.value };
    });
  };

  const handleImageUrlInputChange = (e) => {
    setMovie((prevState) => {
      return { ...prevState, image_url: e.target.value };
    });
  };

  const handleDurationInputChange = (e) => {
    setMovie((prevState) => {
      return { ...prevState, duration: e.target.value };
    });
  };

  const handleReleaseDateInputChange = (e) => {
    setMovie((prevState) => {
      return { ...prevState, release_date: e.target.value };
    });
  };

  const handleGenreInputChange = (e) => {
    setMovie((prevState) => {
      return { ...prevState, genre: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (id) {
      updateMovie(id, movie);
    } else {
      postMovie(movie);
    }
    navigate("/movies");
  };

  return (
    <div>
      <form
        className="container"
        onSubmit={(event) => submitHandler(event, movie)}
      >
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input
          onChange={handleTitleInputChange}
          className="form-control container"
          name="title"
          type="text"
        ></input>

        <label className="form-label" htmlFor="director">
          Director
        </label>
        <input
          onChange={handleDirectorInputChange}
          className="form-control container"
          name="director"
          type="text"
        ></input>

        <label className="form-label" htmlFor="image_url">
          Image url
        </label>
        <input
          onChange={handleImageUrlInputChange}
          className="form-control container"
          name="image_url"
          type="text"
        ></input>

        <label className="form-label" htmlFor="duration">
          Duration
        </label>
        <input
          onChange={handleDurationInputChange}
          className="form-control container"
          name="duration"
          type="number"
        ></input>

        <label className="form-label" htmlFor="release_date">
          Release date
        </label>
        <input
          onChange={handleReleaseDateInputChange}
          className="form-control container"
          name="release_date"
          type="date"
        ></input>

        <label className="form-label" htmlFor="title">
          Genre
        </label>
        <input
          onChange={handleGenreInputChange}
          className="form-control container"
          name="genre"
          type="text"
        ></input>

        {id ? (
          <button
            className="w-100 btn btn-lg btn-warning mt-3"
            type="submit"
            onClick={submitHandler}
          >
            Edit
          </button>
        ) : (
          <button
            className="w-100 btn btn-lg btn-success mt-3"
            type="submit"
            onClick={submitHandler}
          >
            Add
          </button>
        )}
      </form>
    </div>
  );
};

export default AddMovie;
