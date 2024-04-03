import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Redux/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const is_popular = useSelector((store) => store?.movies?.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !is_popular && getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default usePopularMovies;
