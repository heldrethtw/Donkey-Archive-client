import React from "react";
import PropTypes from "prop-types";

function MovieCard({ movie, onMovieSelect, showImage, onRemoveMovie }) {
  const handleRemoveMovie = () => {
    onRemoveMovie(movie);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{movie.title}</h1>
        <p className="card-text">{movie.description}</p>
        {showImage && (
          <img className="card-img-top" src={movie.image} alt={movie.title} />
        )}
        <button
          className="btn btn-primary"
          onClick={() => onMovieSelect(movie)}
        >
          Select
        </button>
        <button className="btn btn-danger" onClick={handleRemoveMovie}>
          Remove
        </button>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  showImage: PropTypes.bool.isRequired,
  onRemoveMovie: PropTypes.func.isRequired,
};

export default MovieCard;
