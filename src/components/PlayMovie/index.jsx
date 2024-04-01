import React from "react";
import Header from "../Header";
import { useSelector } from "react-redux";
import useMovieVideo from "../../hooks/useMovieVideo";
import VideoPlaying from "../VideoPlaying";

const PlayMovie = () => {
  const movieId = useSelector((store) => store?.movies?.movieId);
  useMovieVideo(movieId);
  return (
    <div>
      <Header />
      <VideoPlaying movieId={movieId} />
    </div>
  );
};

export default PlayMovie;
