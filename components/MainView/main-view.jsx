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
            "https://www.imdb.com/title/tt6751668/mediaviewer/rm4284241408/",
        },
        {
          id: 2,
          title: "Ghost Dog",
          description:
            "A man who lives by the code of the samurai in modern Jersey City as a retained assassin for the Mafia",
          image:
            "https://www.imdb.com/title/tt0165798/mediaviewer/rm4284241408/",
        },
        {
          id: 3,
          title: "El Conde",
          description:
            "A morose satire about the seemingly immortal disease of dictators throughout history",
          image:
            "https://www.imdb.com/title/tt21113540/mediaviewer/rm2652067841/?ref_=tt_ov_i",
        },
      ],

      selectedMovie: null,
    };

    this.onMovieSelect = this.onMovieSelect.bind(this);
  }

  onMovieSelect(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;
    if (selectedMovie) {
      return (
        <MovieView
          movie={selectedMovie}
          onBackClick={() => this.setState({ selectedMovie: null })}
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
