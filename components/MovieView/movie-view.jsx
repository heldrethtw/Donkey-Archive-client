import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function MovieView({ movieId }) {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (movieId) {
      setIsLoading(true);
      fetch(
        `https://donkey-archive-af41e8314602.herokuapp.com/api/movies/${movieId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setMovie(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch movie details:", error);
          setError(error);
          setIsLoading(false);
        });
    }
  }, [movieId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading movie: {error.message}</p>;
  if (!movie) return <p>No movie found</p>;

  return (
    <div className="movie-view">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <img src={movie.image} alt={movie.title} />
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}

MovieView.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieView;
