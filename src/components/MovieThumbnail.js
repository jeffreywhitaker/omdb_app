import React from "react";
import styled from "styled-components";

import helpers from "../utils/helpers";

export default function MovieThumbnail(props) {
  let { Title, Year, imdbID, Poster } = props.movie;
  let { nominated, onClickNominate } = props;

  return (
    <Article className="card">
      {Poster !== "N/A" ? (
        <img className="card-img-top" src={Poster} alt="Promo poster" />
      ) : (
        <div className="noImg">No image available...</div>
      )}
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{Year}</h6>
        {!helpers.isNominated(nominated, imdbID) && (
          <button
            className="button btn-sm btn-outline-primary"
            onClick={(e) => onClickNominate(e, props.movie, "add")}
          >
            Nominate
          </button>
        )}
        {helpers.isNominated(nominated, imdbID) && (
          <button
            className="button btn-sm btn-outline-danger"
            onClick={(e) => onClickNominate(e, props.movie, "remove")}
          >
            Remove
          </button>
        )}
        {helpers.isNominated(nominated, imdbID) && <span>Nominated!</span>}
      </div>
    </Article>
  );
}

const Article = styled.div`
  margin: 5px;
  width: 15rem;

  > img {
    max-height: 352px;
  }

  > div {
    > span {
      padding: 2px;
      background-color: lightgreen;
      margin-left: 10px;
    }

    > .bottom {
      position: absolute;
      bottom: 0;
      margin-bottom: 20px;
    }
  }
`;
