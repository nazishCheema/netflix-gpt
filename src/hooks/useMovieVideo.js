import { API_OPTIONS } from "../constants";
import { useEffect } from "react";

const useMovieVideo = (movieId) => {
  const getMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
};
export default useMovieVideo;
