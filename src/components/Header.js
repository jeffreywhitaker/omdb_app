import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Section>
      <NavLink to="/">JEFF'S MOVIES APP</NavLink>
      <nav>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/nominated">Favorites</NavLink>
      </nav>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 40px;
  background: blue;
  a {
    padding: 10px 15px;
    text-decoration: none;
    text-weight: bold;
    font: Verdana;
    font-style: italic;
  }
  nav {
    display: flex;
    a {
      padding: 10px 15px;
      :hover {
        background: red;
      }
    }
  }
`;
