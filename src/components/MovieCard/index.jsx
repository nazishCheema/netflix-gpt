import React from "react";
import { IMG_CDN } from "../../constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-40 ">
      <img src={`${IMG_CDN}${poster}`} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
