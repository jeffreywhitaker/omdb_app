import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce";

import ajax from "../utils/ajax";
import MovieThumbnail from "./MovieThumbnail";

export default function Search(props) {
  let { movies, setMovies, nominated, onClickNominate } = props;

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
      <h5>Search for movies by title!</h5>
      <span className="text-muted">
        Please use complete words for best results.
      </span>
      <div className="input-group mb-3 inputDiv">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="start typing..."
          aria-label="Search Field"
          aria-describedby="basic-addon1"
          onChange={(e) => debouncedCallback(e.target.value)}
        />
      </div>
      {searching && <div>Searching, please wait...</div>}

      <br />

      <div className="resultsDiv">
        {movies &&
          movies.map((movie) => {
            return (
              <MovieThumbnail
                movie={movie}
                nominated={nominated}
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
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  > .inputDiv {
    min-width: 200px;
    max-width: 40%;
  }

  > span {
    font-size: 12px;
    margin: 2px 0;
  }

  .resultsDiv {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
