import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Search from "./components/Search";
import Nominated from "./components/Nominated";

function App() {
  const [nominated, setNominated] = useState([]);
  const [movies, setMovies] = useState([]);

  // if nominated list is saved in local storage, aquire it
  useEffect(() => {
    if (localStorage.getItem("nominated")) {
      const tempNominated = localStorage.getItem("nominated");
      let parsedNominated;
      try {
        parsedNominated = JSON.parse(tempNominated);
        setNominated(parsedNominated);
      } catch (e) {
        console.log("error", e);
      }
    }
  }, []);

  function onClickNominate(e, movieToAddOrRemove, whatToDo) {
    e.preventDefault();
    let nominatedToSet = [];

    // add the movie into the array of movies
    if (whatToDo === "add") {
      if (nominated.length >= 5) {
        alert("Cannot add - please remove at least one movie to add more.");
        return;
      }
      nominatedToSet = [...nominated, movieToAddOrRemove];
      setNominated(nominatedToSet);
      // filter out the removed movie
    } else if (whatToDo === "remove") {
      nominatedToSet = [
        ...nominated.filter((movie) => {
          return movie.imdbID !== movieToAddOrRemove.imdbID;
        }),
      ];
      setNominated(nominatedToSet);
    }
    if (nominated.length > 0) {
      localStorage.setItem("nominated", JSON.stringify(nominatedToSet));
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
              onClickNominate={onClickNominate}
              setMovies={setMovies}
            />
          )}
        />
        <Route
          path="/nominated"
          render={() => (
            <Nominated
              nominated={nominated}
              onClickNominate={onClickNominate}
            />
          )}
        />
      </div>
    </StyledSection>
  );
}

export default App;

const StyledSection = styled.section`
  > .wrapper {
    max-width: 1100px;
    margin: 0 auto;
  }
`;
