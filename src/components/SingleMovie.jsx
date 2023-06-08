import { useParams } from "react-router-dom";
import { getMovie } from "../service/moviesService";
import { useEffect, useState } from "react";

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getMovie(id).then(({ data }) => {
        setMovie(data);
      });
    }
  }, [id]);

  
  return (
    <div className="d-flex justify-content-center">
      <div>
        <div className="card-body">
         <h1 className="card-title">{movie.title}</h1>
          <p >
            Director: {movie.director}
          </p>
          <p>Duration:{movie.duration}</p>
          <p>Release date:{movie.release_date}</p>

          
        </div>
      </div>
    </div>
  );
};
export default SingleMovie;