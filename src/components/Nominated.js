import React from "react";

import NominatedThumbnail from "./NominatedThumbnail";

export default function Nominated(props) {
  let { nominated } = props;

  if (nominated.length < 1) {
    return <p>You have nominated 0 out of 5 possible movies!</p>;
  }

  return (
    <div>
      {nominated.map((movie) => {
        console.log("movie id in nominated", movie.imdbID);

        return <NominatedThumbnail imdbID={movie.imdbID} key={movie.imdbID} />;
      })}
    </div>
  );
}
