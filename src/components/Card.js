import React from "react";
import { Link } from "react-router-dom";

function Card({ pokemon, order }) {
  let pokemonOrder = Number.parseInt(order) + 1;
  return (
    <div className="Card">
      <div className="Card__name">
        <Link className="link-card" to={"/pokemons/" + pokemonOrder}>
          <span className="link-text">{pokemon.name}</span>
        </Link>
      </div>
    </div>
  );
}

export default Card;
