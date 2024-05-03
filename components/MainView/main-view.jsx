import React, { useState, useEffect } from "react";
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
    <NavigationBar>
      <Row className="justify-content-md-center">
        <Routes>
          {!user ? (
            <>
              <Col>
                <LoginView onLoggedIn={handleLoggedIn} />
              </Col>
              <Col>
                <SignUp />
              </Col>
            </>
          ) : (
            <>
              <Route
                path="/"
                element={
                  selectedMovie ? (
                    <MovieView
                      movie={selectedMovie}
                      onBackClick={() => setSelectedMovie(null)}
                    />
                  ) : (
                    <>
                      <Col>
                        <button onClick={handleLoggedOut}>Logout</button>
                      </Col>
                      <Col>
                        <Link to="/">Home</Link>
                      </Col>
                      <Col>
                        <Link to="/profile">Profile</Link>
                      </Col>
                      {movies.map((movie) => (
                        <Col key={movie._id}>
                          <MovieCard
                            movie={movie}
                            onMovieClick={setSelectedMovie}
                          />
                        </Col>
                      ))}
                    </>
                  )
                }
              />
              <Route path="/profile" element={<ProfileView />} />
            </>
          )}
          {!user && (
            <>
              <Route
                path="/login"
                element={<LoginView onLoggedIn={handleLoggedIn} />}
              />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
        </Routes>
      </Row>
    </NavigationBar>
  );
};

export default MainView;
