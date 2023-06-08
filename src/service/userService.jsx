import { API } from "../shared/api";

export const registerUser = (name, email, password) => {
  return API.post("/register", {
    // realm: "MoviesApp",
    name,
    email,
    password,
    // emailVerified: true,
  });
};

export const logIn = (email, password) => {
  return API.post("/login", {
    email,
    password,
  });
};