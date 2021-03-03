import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function NavBar() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="links">
        <Link className="link" to="/pokemons">
          Pokemons
        </Link>
        <Link className="link" to="/types">
          Types
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
