import React from "react";
import Header from "../Header";
import useNowPlaying from "../../hooks/useNowPlaying";
import MainContainer from "../MainContainer";
import SecondaryContainer from "../SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpComingMovies from "../../hooks/useUpComingMovies";
import { useSelector } from "react-redux";
import Search from "../Search";

const Browse = () => {
  const searchView = useSelector((store) => store?.search?.toggleSearch);
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {searchView ? (
        <Search />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
