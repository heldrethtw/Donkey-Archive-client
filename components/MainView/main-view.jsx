import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/movie-card";
import MovieView from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import SignUp from "../SignupView/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

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
  }, [token]);

  const handleLoggedIn = (user, token) => {
    setUser(user);
    setToken(token);
  };

  const handleLoggedOut = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <Row>
      {!user ? (
        <>
          <Col>
            <LoginView onLoggedIn={handleLoggedIn} />
          </Col>
          <Col>
            <SignUp />
          </Col>
        </>
      ) : selectedMovie ? (
        <MovieView
          movie={selectedMovie}
          onBackClick={() => setSelectedMovie(null)}
        />
      ) : (
        <>
          <Col>
            <button onClick={handleLoggedOut}>Logout</button>
          </Col>
          {movies.map((movie) => (
            <Col key={movie._id}>
              <MovieCard movie={movie} onMovieClick={setSelectedMovie} />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};

export default MainView;
