import React from "react";
import SearchBar from "../SearchBar";
import MovieSuggestions from "../MovieSuggestions";
import { BACKGROUND_IMAGE } from "../../constants";

const Search = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <SearchBar />
      <MovieSuggestions />
    </div>
  );
};

export default Search;
