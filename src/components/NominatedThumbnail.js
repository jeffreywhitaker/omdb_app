import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ajax from "../utils/ajax";

export default function NominatedThumbnail(props) {
  const { imdbID } = props;

  const [currMovie, setCurrMovie] = useState(null);

  useEffect(() => {
    ajax.getMovie(imdbID).then((response) => {
      console.log("movie res", response);
      setCurrMovie(response.data);
    });
  }, [imdbID, setCurrMovie]);

  if (!currMovie) {
    return <p></p>;
  }

  return (
    <Article className="card">
      <img className="card-img-top" src={currMovie.Poster} alt="Promo poster" />
      <div className="card-body">
        <h5 className="card-title">{currMovie.Title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{currMovie.Year}</h6>
        <p className="card-text">{currMovie.Rated}</p>
        <p className="card-text">{currMovie.Actors}</p>
      </div>
    </Article>
  );
}

const Article = styled.article`
  width: 15rem;
  margin: 5px;
  > img {
    height: 150px;
    object-fit: cover;
  }
`;
