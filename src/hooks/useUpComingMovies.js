import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../Redux/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const is_upComing = useSelector((store) => store?.movies?.upComingMovies);
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    !is_upComing && getUpComingMovies();
  }, []);
};
export default useUpComingMovies;
