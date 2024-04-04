import React from "react";
import MovieCard from "../MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies === null) return;

  return (
    <div className="px-2 md:px-6 ">
      <h1 className=" text-xl md:text-3xl text-white py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies?.map(
              (movie) =>
                movie?.poster_path && (
                  <MovieCard
                    key={movie?.id}
                    poster={movie?.poster_path}
                    movieId={movie?.id}
                  />
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
