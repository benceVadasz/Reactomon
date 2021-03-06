// import { render } from '@testing-library/react';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import ball from "../assets/ball.svg";
import { useStoreActions } from 'easy-peasy';
// import PokemonDetail from './PokemonDetail';

export default function Card({ pokemon }) {
  const [visible, setVisible] = useState(true);
  let pokemonOrder = pokemon.url.split("/");
  let id = pokemonOrder.slice(-2)[0];
  const add = useStoreActions(actions => actions.addPokemon);
  const onClick = () => {
    add(pokemon)
    setVisible(false)
    console.log('blab');
  }
  

  return (
    <div className="Card">
      <div className="Card__name">
        <Link className="link-card" to={"/pokemon/" + id}>
          <span className="link-text">{pokemon.name}</span>
        </Link>
        <Link className="" to="pokemons" onClick={onClick}>
            {(window.location.href==="http://localhost:3000/catched-pokemons") ?
            "":
            <img className={visible? "ball":"hi"} src={ball} alt="" title="catch pokemon" /> }
        </Link>
      </div>
    </div>
  );
}
