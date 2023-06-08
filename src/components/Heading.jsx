import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../storage/UserContext";


const Heading = () => {
 

//   const { movies } = useContext(MoviesContext);
const { user } = useContext(UserContext);

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Movies</span>
        </Link>


        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/movies" className="nav-link" aria-current="page">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Add Movie
            </Link>
          </li>
          {user.id ? (
            <></>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </div>
  );
};
export default Heading;