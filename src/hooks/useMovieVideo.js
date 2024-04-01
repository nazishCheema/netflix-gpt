import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { useEffect } from "react";
import { addSelectedMovieTrailer } from "../Redux/movieSlice";

const useMovieVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data?.json();
    const filteredData = json?.results?.filter((movieType) => {
      return movieType?.type === `Trailer`;
    });
    const trailer = filteredData ? filteredData[0] : json?.results[0];
    dispatch(addSelectedMovieTrailer(trailer));
  };
  useEffect(() => {
    getMovie();
    return () => {
      dispatch(addSelectedMovieTrailer(null));
    };
  }, []);
};
export default useMovieVideo;
