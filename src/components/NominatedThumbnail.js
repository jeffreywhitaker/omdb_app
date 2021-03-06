import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ajax from "../utils/ajax";
import helpers from "../utils/helpers";

export default function NominatedThumbnail(props) {
  const { imdbID, nominated, onClickNominate } = props;

  const [currMovie, setCurrMovie] = useState(null);

  // fetch the movie on component load
  useEffect(() => {
    ajax.getMovie(imdbID).then((response) => {
      setCurrMovie(response.data);
    });
  }, [imdbID, setCurrMovie]);

  // render a loading card while loading
  if (!currMovie) {
    return (
      <Article className="card">
        <div className="card-body">Loading...</div>
      </Article>
    );
  }

  return (
    <Article className="card">
      {currMovie.Poster !== "N/A" ? (
        <img
          className="card-img-top"
          src={currMovie.Poster}
          alt="Promo poster"
        />
      ) : (
        <div className="noImg">No image available...</div>
      )}
      <div className="card-body">
        <h5 className="card-title">{currMovie.Title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{currMovie.Year}</h6>
        <p className="card-text">
          {currMovie.Rated !== "N/A" ? currMovie.Rated : "No rating submitted."}
        </p>
        <p className="card-text">
          {currMovie.Actors !== "N/A"
            ? currMovie.Actors
            : "No actor data available."}
        </p>
        {helpers.isNominated(nominated, imdbID) && (
          <button
            className="button btn-sm btn-outline-danger"
            onClick={(e) => onClickNominate(e, { imdbID }, "remove")}
          >
            Remove
          </button>
        )}
      </div>
    </Article>
  );
}

const Article = styled.article`
  width: 15rem;
  margin: 5px;
  > img {
    height: 352px;
  }
  > .noImg {
    display: flex;
    height: 352px;
    width: 238px;
    text-align: center;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid black;
  }
`;
