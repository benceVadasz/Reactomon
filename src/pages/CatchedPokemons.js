import React from "react";
import { useStoreState } from "easy-peasy";
import Card from "../components/Card";

export default function Pokemons() {
  const pokemons = useStoreState((state) => state.pokemons);
  if (pokemons.length <= 0) {
    return <h3>No pokemons yet</h3>;
  }
  return (
    <div className="big">
      <h1>Caught Pokemons</h1>
      <h3 className="grid-container">
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.name} />
        ))}
      </h3>
      
    </div>
  );
}
