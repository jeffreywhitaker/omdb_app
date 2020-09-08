import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header(props) {
  let { nominated } = props;

  return (
    <Section>
      <div className="navContainer">
        <NavLink to="/">JEFF'S MOVIES APP</NavLink>
        <nav>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/nominated">Nominated</NavLink>
        </nav>
        <div>
          <p>You have selected {nominated.length} movies.</p>
        </div>
      </div>
      {nominated.length === 5 && (
        <div className="banner">
          <p>Maximum movies selected! Please remove one to select more!</p>
        </div>
      )}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  z-index: 9;
  width: 100%;
  height: 40px;
  background: lightblue;
  position: fixed;
  top: 0;
  margin-bottom: 50px;

  > .navContainer {
    height: 100%;
    display: flex;

    > a {
      padding: 10px 15px;
      color: black;
      text-decoration: none;
      font: Verdana;
      font-style: italic;
      font-weight: bold;
    }

    > nav {
      display: flex;
      > a {
        color: black;
        text-decoration: none;
        padding: 10px 15px;
        :hover {
          background: red;
        }
      }
    }

    > div {
      > p {
        margin: 0;
        padding: 10px 15px;
      }
    }
  }

  > .banner {
    background-color: lightsalmon;
    margin: 0;
    padding: 2px 0;
    text-align: center;
    > p {
      margin: 0px;
    }
  }

  @media only screen and (max-width: 600px) {
    height: 80px;
    > .navContainer {
      flex-direction: column;
    }

    > .banner {
      position: fixed;
      float: right;
    }
  }
`;
