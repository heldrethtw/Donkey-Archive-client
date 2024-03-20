import React from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MovieView } from "../MovieView/movie-view";

function MainView() {
  const movies = ([movies, setMovies] = useState([
    {
      id: 1,
      title: "Parasite",
      description: "A poor family cons its way into a wealthy family's home",
      image: "https://www.imdb.com/title/tt6751668/mediaviewer/rm4284241408/",
    },
    {
      id: 2,
      title: "Ghost Dog",
      description:
        "A man who lives by the code of the samurai in modern Jersey City as a retained assassin for the Mafia",
      image: "https://www.imdb.com/title/tt0165798/mediaviewer/rm4284241408/",
    },
    {
      id: 3,
      title: "El Conde",
      description:
        "A morose satire about the seemingly immortal disease of dictators throughout history",
      image:
        "https://www.imdb.com/title/tt21113540/mediaviewer/rm2652067841/?ref_=tt_ov_i",
    },
  ]));

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return movies.map((m) => <MovieCard key={m.id} movie={m} />);
          }}
        />
        <Route
          path="/movies/:movieId"
          render={({ match }) => {
            return (
              <MovieView
                movie={movies.find((m) => m.id === match.params.movieId)}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
}
export default MainView;
