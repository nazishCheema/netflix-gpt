import React from "react";
import { IMG_CDN } from "../../constants";
import { useDispatch } from "react-redux";
import { addMovieVideo, toggleMovieView } from "../../Redux/movieSlice";

const MovieCard = ({ poster, movieId }) => {
  const dispatch = useDispatch();

  const handleMovie = () => {
    dispatch(addMovieVideo(movieId));
    dispatch(toggleMovieView());
  };
  return (
    <div className="w-40 ">
      <img
        src={`${IMG_CDN}${poster}`}
        alt="movie poster"
        onClick={handleMovie}
      />
    </div>
  );
};

export default MovieCard;
