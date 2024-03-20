import React from "react";

class MovieView extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <img src={movie.image} />
        <button onClick={onBackClick}>Back</button>
      </div>
    );
  }
}

export default MovieView;
