import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ToggleTheme from "../ToggleTheme";
import { ThemeContext } from "../contexts/ThemeContext";
import logo from "../assets/logo.png";

function Header() {
  const Button = styled.button`
    width: 115px;
    height: 45px;
    cursor: pointer;
    background: #4e9caf;
    padding: 7px;
    color: white;
    font-weight: bold;
    line-height: 25px;
    border: none;
    border-radius: 5%;
    text-decoration: none;
    outline: none;
    margin: 20px 20px;
    font-family: "Artifika", serif;
    font-size: 18px;
    &:hover {
      background: #42826d;
    }
  `;

  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? " darkmode" : "";
  return (
    <header className={"header" + theme}>
      <div className="links">
        <ToggleTheme />
        <Link to="/pokemons">
          <Button id="pok-btn">Pokemons</Button>
        </Link>
        <Link to="/types">
          <Button id="type-btn">Types</Button>
        </Link>
        <Link to="/catched-pokemons">
          <Button id="catched-btn">Caught</Button>
        </Link>
        <Link to="/">
          <img src={logo} alt="" width="300px" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
