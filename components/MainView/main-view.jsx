import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/movie-card";
import MovieView from "../MovieView/movie-view";

const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://donkey-archive-af41e8314602.herokuapp.com/api/tmbdmovies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      });
  }, []);

  return (
    <div>
      <h1>Donkey Archive</h1>
      {selectedMovie ? (
        <MovieView
          movie={selectedMovie}
          onBackClick={() => setSelectedMovie(null)}
        />
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieSelect={(movie) => setSelectedMovie(movie)}
            showImage={true}
          />
        ))
      )}
    </div>
  );
};
export default MainView;
