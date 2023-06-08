import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ShowMovies from "./components/ShowMovies";
import SignIn from "./register/SignIn";
import SignUp from "./register/SignUp";
import AddMovie from "./components/AddMovie";
import { useContext } from "react";
import MoviesContext from "./storage/MoviesContext";
import SingleMovie from "./components/SingleMovie";

function App() {
  const movieContext = useContext(MoviesContext);

  return (
    <Routes>
      <Route
        index
        path="/movies"
        element={<ShowMovies movies={MoviesContext} />}
      ></Route>
      <Route path="/add" element={<AddMovie />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/movies/:id" element={<SingleMovie />}></Route>
      <Route path="/movies/edit/:id" element={<AddMovie/>}></Route>
    </Routes>
  );
}

export default App;
