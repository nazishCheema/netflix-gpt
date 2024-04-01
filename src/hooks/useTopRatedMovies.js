import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Redux/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const is_topRated = useSelector((store) => store?.movies?.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !is_topRated && getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
