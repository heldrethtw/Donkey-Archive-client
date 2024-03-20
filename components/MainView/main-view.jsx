import React from "react";
import MovieCard from "../MovieCard/movie-card";
import MovieView from "../MovieView/movie-view";

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          title: "Parasite",
          description:
            "A poor family cons its way into a wealthy family's home",
          image:
            "https://image.tmdb.org/t/p/original/5aEt0PK9YRiTXNU2M03tTTveS9i.jpg",
        },
        {
          id: 2,
          title: "Ghost Dog",
          description:
            "A man who lives by the code of the samurai in modern Jersey City as a retained assassin for the Mafia",
          image:
            "https://image.tmdb.org/t/p/original/hrcfYUGvSQcLfRjqxvDpvCLnYXX.jpg",
        },
        {
          id: 3,
          title: "El Conde",
          description:
            "A morose satire about the seemingly immortal disease of dictators throughout history",
          image:
            "https://image.tmdb.org/t/p/original/lpgsjfL8vOfPzmLM4u5M8ivSK5A.jpg",
        },
      ],

      selectedMovie: null,
      selectedMovie: null,
    };

    this.onMovieSelect = this.onMovieSelect.bind(this);
  }

  onMovieSelect(movie) {
    this.setState({
      selectedMovie: movie,
      selectedMovieID: movie.id,
    });
  }

  render() {
    const { movies, selectedMovie, selectedMovieID } = this.state;
    if (selectedMovie) {
      return (
        <MovieView
          movie={selectedMovie}
          onBackClick={() =>
            this.setState({ selectedMovie: null, selectedMovieID: null })
          }
        />
      );
    }

    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieSelect={() => this.onMovieSelect(movie)}
          />
        ))}
      </div>
    );
  }
}

export default MainView;
