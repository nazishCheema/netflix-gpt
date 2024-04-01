import React from "react";
import useMovieVideo from "../../hooks/useMovieVideo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PlayMovie = () => {
  const trailer = useSelector((store) => store?.movies?.selctedMovie);
  const { movieId } = useParams();

  useMovieVideo(movieId);
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video h-screen "
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PlayMovie;
