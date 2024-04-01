import React from "react";
import SearchBar from "../SearchBar";
import MovieSuggestions from "../MovieSuggestions";
import { BACKGROUND_IMAGE } from "../../constants";

const Search = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover "
          src={BACKGROUND_IMAGE}
          alt="background"
        />
      </div>
      <SearchBar />
      <MovieSuggestions />
    </div>
  );
};

export default Search;
