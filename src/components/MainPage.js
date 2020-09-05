import React from "react";

import MovieThumbnail from "./MovieThumbnail";

export default function MainPage(props) {
  const { movies } = props;

  if (!movies) return null;

  return (
    <div>
      {movies.map((movie) => {
        return <MovieThumbnail movie={movie} key={movie.imdbID} />;
      })}
    </div>
  );
}
