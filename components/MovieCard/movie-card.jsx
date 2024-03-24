import React from "react";
import PropTypes from "prop-types";

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

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  showImage: PropTypes.bool.isRequired,
};

export default MovieCard;
