import React from "react";
import { IMG_CDN } from "../../constants";
import { Link } from "react-router-dom";

const MovieCard = ({ poster, movieId }) => {
  return (
    <div className="w-40 ">
      <Link to={`/browse/${movieId}`}>
        <img src={`${IMG_CDN}${poster}`} alt="movie poster" />
      </Link>
    </div>
  );
};

export default MovieCard;
