import React from "react";
import styled from "styled-components";

export default function MovieThumbnail(props) {
  let { Title, Year, isNominated } = props.movie;
  let { onClickNominate } = props;

  return (
    <Article>
      <p>
        {Title}, <span>{Year}</span>
      </p>
      <button onClick={(e) => onClickNominate(e, props.movie)}>Nominate</button>
      {isNominated && (
        <button onClick={(e) => onClickNominate(e, props.movie)}>Remove</button>
      )}
    </Article>
  );
}

const Article = styled.article`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  min-width: 50px;
  p {
    span {
      font-style: italic;
    }
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    div {
      width: 90%;
    }
  }
`;
