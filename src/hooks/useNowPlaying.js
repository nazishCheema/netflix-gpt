import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Redux/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const now_playing = useSelector((store) => store?.movies?.nowPlayingMovies);
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !now_playing && getNowPlaying();
  }, []);
};
export default useNowPlaying;
