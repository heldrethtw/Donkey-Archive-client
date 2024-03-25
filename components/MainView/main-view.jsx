import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/movie-card";
import MovieView from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import SignUp from "../SignupView/sign-up";

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

  return (
    <div>
      {!user ? (
        <>
          <LoginView onLoggedIn={handleLoggedIn} />
          <SignUp />
        </>
      ) : selectedMovie ? (
        <MovieView
          movie={selectedMovie}
          onBackClick={() => setSelectedMovie(null)}
        />
      ) : (
        <>
          <button onClick={handleLoggedOut}>Logout</button>
          {movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={setSelectedMovie}
            />
          ))}
        </>
      )}
    </div>
  );
};
const handleLoggedOut = () => {
  setUser(null);
  setToken(null);
};

return (
  <div>
    {!user ? (
      <LoginView onLoggedIn={handleLoggedIn} />
    ) : selectedMovie ? (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    ) : (
      <>
        <button onClick={handleLoggedOut}>Logout</button>
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onMovieClick={setSelectedMovie}
          />
        ))}
      </>
    )}
  </div>
);
export default MainView;
