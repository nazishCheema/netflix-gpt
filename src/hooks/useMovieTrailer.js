import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addTrailer } from "../Redux/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json?.results?.filter((movieType) => {
      return movieType?.type === `Trailer`;
    });

    const trailer = filteredData ? filteredData[0] : json?.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};
export default useMovieTrailer;
