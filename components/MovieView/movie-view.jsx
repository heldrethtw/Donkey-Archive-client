import React from "react";
import PropTypes from "prop-types";

function MovieView(props) {
  const { movie, onBackClick } = props;
  return (
    <div className="movie-view">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <img src={movie.image} alt={movie.title} />
      <button onClick={onBackClick}>Back</button>
    </div>
  );
}

MovieView.propTypes = {
  movie: PropTypes.object.isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default MovieView;
