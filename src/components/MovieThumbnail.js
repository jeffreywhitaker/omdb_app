import React from "react";
import styled from "styled-components";

export default function MovieThumbnail(props) {
  let { Title, Year, imdbID } = props.movie;
  let { nominated, onClickNominate } = props;

  console.log("movie", props.movie);

  function isNominated() {
    if (nominated.length > 0) {
      return nominated.some((movie) => movie.imdbID === imdbID);
    } else return false;
  }

  return (
    <Article>
      <p>
        {Title}, <span>{Year}</span>
      </p>
      {!isNominated() && (
        <button onClick={(e) => onClickNominate(e, props.movie, "add")}>
          Nominate
        </button>
      )}
      {isNominated() && (
        <button onClick={(e) => onClickNominate(e, props.movie, "remove")}>
          Remove
        </button>
      )}
      {isNominated() && <span>Nominated!</span>}
    </Article>
  );
}

const Article = styled.article`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  min-width: 50px;
  > p {
    > span {
      font-style: italic;
    }
  }
  > span {
    background-color: lightgreen;
    margin-left: 10px;
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    div {
      width: 90%;
    }
  }
`;
