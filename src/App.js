import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Search from "./components/Search";
import Nominated from "./components/Nominated";

function App() {
  const [nominated, setNominated] = useState([]);
  const [movies, setMovies] = useState([]);

  function onClickNominate(e, movieToAddOrRemove, whatToDo) {
    e.preventDefault();
    if (nominated.length >= 5) {
      alert("Cannot add - please remove at least one movie to add more.");
      return;
    }

    // add the movie into the array of movies
    if (whatToDo === "add") {
      setNominated([...nominated, movieToAddOrRemove]);
      // filter out the removed movie
    } else if (whatToDo === "remove") {
      setNominated([
        ...nominated.filter((movie) => {
          return movie.imdbID !== movieToAddOrRemove.imdbID;
        }),
      ]);
    }
  }

  return (
    <StyledSection>
      <Header nominated={nominated} />
      <div className="wrapper">
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route
          path="/search"
          render={() => (
            <Search
              movies={movies}
              nominated={nominated}
              setNominated={setNominated}
              onClickNominate={onClickNominate}
              setMovies={setMovies}
            />
          )}
        />
        <Route
          path="/nominated"
          nominated={nominated}
          render={() => <Nominated nominated={nominated} />}
        />
      </div>
    </StyledSection>
  );
}

export default App;

const StyledSection = styled.section`
  > .wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
`;
