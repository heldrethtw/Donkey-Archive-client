import React from "react";

function MovieCard({ movie, onMovieSelect, showImage }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      {showImage && <img src={movie.image} />}
      <button onClick={() => onMovieSelect(movie)}>Select</button>
    </div>
  );
}

export default MovieCard;
