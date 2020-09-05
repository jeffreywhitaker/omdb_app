import React from "react";
import MovieThumbnail from "./MovieThumbnail";

export default function Nominated(props) {
  let { nominated } = props;

  return (
    <div>
      {nominated.map((movie) => {
        return <li>{movie.Title}</li>;
      })}
    </div>
  );
}
