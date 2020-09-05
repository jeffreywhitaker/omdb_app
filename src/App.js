import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import ajax from "./utils/ajax";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Favorites from "./components/Favorites";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searching, setSearching] = useState(false);
  const [typing, setTyping] = useState(false);

  let searchTimeout;
  function onSearchChange(e) {
    e.persist();
    setTyping(true);
    console.log("val");
    console.log(e.target.value);
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      setTyping(false);
      setSearching(true);
      ajax.getMovies(e.target.value).then((res) => {
        console.log(res);
        setMovies(res.data.Search);
        setSearching(false);
        setTimeout(() => {
          console.log("movies");
          console.log(movies);
        });
      });
    }, 2000);
  }

  return (
    <StyledSection>
      <Header />
      <input onChange={onSearchChange} />
      {searching && <div>Searching, please wait...</div>}
      {typing && <div>Waiting to search until input stops.</div>}
      <div className="wrapper">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage movies={movies} onSearchChange={onSearchChange} />
          )}
        />
        <Route
          path="/favorites"
          render={() => <Favorites favorites={favorites} />}
        />
      </div>
    </StyledSection>
  );
}

export default App;

const StyledSection = styled.section`
  height: 100vh;
  background: pink;
  .wrapper {
    max-width: 20px;
  }
`;
