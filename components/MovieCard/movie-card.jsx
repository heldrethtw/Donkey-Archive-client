import React from "react";
import { useNavigate } from "react-router-dom";

export function MovieCard(props) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/movies/${props.movie.id}`)}>
      <h1>{props.movie.title}</h1>
      <img src={props.movie.image} />
    </div>
  );
}

export default MovieCard;
