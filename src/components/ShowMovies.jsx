import { useState, useEffect } from "react";
import { getMovies} from "../service/moviesService";
import { Link } from "react-router-dom";


const ShowMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(({ data }) => setMovies(data));
  }, []);

//   const { movies, updateMovie } = useContext(MoviesContext);

//     useEffect(() => {
//       getMovies().then(({ data }) => updateMovie(data));
//     }, [updateMovie]);


  return (
    <div>
      <h1 className="App">All movies</h1>
      <br />
      <table className=" container table table-success table-striped">
        <thead>
          <tr className="table-primary">
            <th scope="col">Titel</th>
            <th scope="col"> Director</th>
          </tr>
        </thead>
        
        <tbody>
          {movies.map((movie, id) => (
            <tr key={id}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>
                <button className="btn btn-outline-primary">
                  <Link to={`/movies/${movie.id}`}>View Movie</Link>
                </button>
               </td> 

               <td>
                <button className="btn btn-outline-primary">
                  <Link to={`edit/${movie.id}`}>Edit</Link>
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ShowMovies;