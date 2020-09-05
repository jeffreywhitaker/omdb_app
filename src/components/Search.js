import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce";

import ajax from "../utils/ajax";
import MovieThumbnail from "./MovieThumbnail";

export default function Search(props) {
  let { movies, setMovies, onClickNominate } = props;

  const [searchInput, setSearchInput] = useState(null);
  const [searching, setSearching] = useState(false);

  const [debouncedCallback] = useDebouncedCallback((value) => {
    setSearchInput(value);
  }, 1000);

  useEffect(() => {
    if (searchInput) {
      setSearching(true);
      ajax.getMovies(searchInput).then((res) => {
        console.log(res);
        setMovies(res.data.Search);
        setSearching(false);
      });
    }
  }, [searchInput, setMovies]);

  return (
    <Section>
      <div className="searchDiv">
        <label>Find a movie!</label>
        <input onChange={(e) => debouncedCallback(e.target.value)} />
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
