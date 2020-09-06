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
    return <p>Loading, please wait...</p>;
  }

  return (
    <Article key={imdbID}>
      <li>
        {currMovie.Title}, {currMovie.Year}
      </li>
      <li>{currMovie.Rated}</li>
      <li>{currMovie.Actors}</li>
    </Article>
  );
}

const Article = styled.article`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  min-width: 50px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    div {
      width: 90%;
    }
  }
`;
