import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export function MovieView(props) {
  const navigate = useNavigate();
  const { movieId } = useParams();
  return (
    <div>
      <h1>{props.movie.title}</h1>
      <img src={props.movie.image} />
      <p>{props.movie.description}</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default MovieView;
