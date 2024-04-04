import React from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";

const MovieSuggestions = () => {
  const moviesResult = useSelector((store) => store?.search?.searchResult);
  if (moviesResult?.length === 0 || !moviesResult) return;
  return (
    <div>
      <MovieList title={`Results`} movies={moviesResult} />
    </div>
  );
};

export default MovieSuggestions;
