import React, { useState } from "react";
import styled from "styled-components";

import ajax from "../utils/ajax";
import MovieThumbnail from "./MovieThumbnail";

export default function Search(props) {
  let { movies, setMovies, onClickNominate } = props;

  const [searching, setSearching] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const onSearchChange = (e) => {
    const tempVal = e.target.value;

    console.log("val");
    console.log(tempVal);
    setSearching(false);
    console.log("timeout start", searchTimeout);
    clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        setSearching(true);
        console.log("AHHHH");
        ajax.getMovies(tempVal).then((res) => {
          console.log(res);
          setMovies(res.data.Search);
          setSearching(false);
          setTimeout(() => {
            console.log("movies");
            console.log(movies);
          });
        });
      }, 2000)
    );
    console.log("timeout end:", searchTimeout);
  };

  console.log("Search component rendered", props, searching, searchTimeout);
  return (
    <Section>
      <div className="searchDiv">
        <label>Find a movie!</label>
        <input onChange={onSearchChange} />
        {searching && <div>Searching, please wait...</div>}
      </div>

      <div className="resultsDiv">
        {movies &&
          movies.map((movie) => {
            return (
              <MovieThumbnail
                movie={movie}
                onClickNominate={onClickNominate}
                key={movie.imdbID}
              />
            );
          })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  padding: 10px 0;
  .searchDiv {
    display: flex;
    flex-direction: column;
    width: 50%;
    input {
      max-width: 300px;
    }
  }
  .resultsDiv {
    width: 50%;
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    div {
      width: 100%;
      margin: 0 auto;
    }
  }
`;
