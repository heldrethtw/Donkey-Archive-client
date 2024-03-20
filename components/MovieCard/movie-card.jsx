import React from "react";

function MovieCard({ movie }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <img src={movie.image} />
      <button onClick={() => onMovieSelect(movie)}>Select</button>
    </div>
  );
}

export default MovieCard;
