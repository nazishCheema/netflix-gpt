import React from "react";
import VideoTitle from "../VideoTitle";
import VideoPlaying from "../VideoPlaying";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;

  const { original_title, overview, id } = movies[0];
  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoPlaying movieId={id} />
    </div>
  );
};

export default MainContainer;
