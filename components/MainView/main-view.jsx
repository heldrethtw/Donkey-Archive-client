import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, logout } from "../../src/users/userSlice";
import { setMovies, setSelectedMovie, clearMovies } from "../../src/app/store";
import MovieCard from "../MovieCard/movie-card";
import MovieView from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import SignUp from "../SignupView/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes, Link } from "react-router-dom";
import NavigationBar from "../NavigationBar/navigation-bar";
import ProfileView from "../ProfileView/profile-view";

const MainView = () => {
  const { user, token } = userSelector((state) => state.user);
  const { movies, selectedMovie } = userSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      fetch(
        "https://donkey-archive-af41e8314602.herokuapp.com/api/tmbd/movies",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setMovies(data))
        .catch((error) => console.error("Failed to fetch movies", error));
    }
  }, [token, dispatch]);

  const handleLoggedIn = (user, token) => {
    dispatch(setUser(user, token));
  };

  const handleLoggedOut = () => {
    dispatch(logout());
    dispatch(clearMovies());
  };

  return (
    <NavigationBar>
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/"
            element={
              !user ? (
                <Col>
                  <LoginView onLoggedIn={handleLoggedIn} />
                  <SignUp />
                </Col>
              ) : selectedMovie ? (
                <MovieView
                  movie={selectedMovie}
                  onBackClick={() => setSelectedMovie(null)}
                />
              ) : (
                <Col>
                  <button onClick={handleLoggedOut}>Logout</button>
                  <Link to="/">Home</Link>
                  <Link to="/profile">Profile</Link>
                  {movies.map((movie) => (
                    <MovieCard
                      key={movie._id}
                      movie={movie}
                      onMovieClick={setSelectedMovie}
                    />
                  ))}
                </Col>
              )
            }
          />
          <Route path="/profile" element={<ProfileView />} />
          <Route
            path="/login"
            element={<LoginView onLoggedIn={handleLoggedIn} />}
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Row>
    </NavigationBar>
  );
};

export default MainView;
