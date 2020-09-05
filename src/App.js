import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import ajax from "./utils/ajax";

import Header from "./components/Header";
import Search from "./components/Search";
import Nominated from "./components/Nominated";

function App() {
  const [nominated, setNominated] = useState([]);
  const [movies, setMovies] = useState([]);

  function onClickNominate(e, movieToAdd) {
    e.preventDefault();
    setNominated([...nominated, movieToAdd]);
  }

  return (
    <StyledSection>
      <Header />
      <div className="wrapper">
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route
          path="/search"
          render={() => (
            <Search
              movies={movies}
              onClickNominate={onClickNominate}
              setMovies={setMovies}
            />
          )}
        />
        <Route
          path="/nominated"
          render={() => <Nominated nominated={nominated} />}
        />
      </div>
    </StyledSection>
  );
}

export default App;

const StyledSection = styled.section`
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
`;
