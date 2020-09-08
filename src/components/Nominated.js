import React from "react";
import styled from "styled-components";

import NominatedThumbnail from "./NominatedThumbnail";

export default function Nominated(props) {
  let { nominated, onClickNominate } = props;

  // display if nothing nominated
  if (nominated.length < 1) {
    return <P>You have nominated 0 out of 5 possible movies!</P>;
  }

  return (
    <Section>
      {nominated.map((movie) => {
        console.log("movie id in nominated", movie.imdbID);

        return (
          <NominatedThumbnail
            imdbID={movie.imdbID}
            nominated={nominated}
            onClickNominate={onClickNominate}
            key={movie.imdbID}
          />
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
`;

const P = styled.p`
  text-align: center;
  margin-top: 10px;
`;
