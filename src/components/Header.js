import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header(props) {
  let { nominated } = props;

  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          JEFF'S MOVIES APP
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nominated">
                Nominated
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
      {nominated.length === 5 && (
        <BannerDiv>
          <p>Maximum movies selected!&nbsp;</p>
          <p>Please remove one to select more!</p>
        </BannerDiv>
      )}
    </>
  );
}

const Nav = styled.nav`
  background: lightblue;
`;

const BannerDiv = styled.nav`
  display: flex;
  background-color: lightsalmon;
  margin: 0;
  padding: 2px 0;
  text-align: center;
`;
