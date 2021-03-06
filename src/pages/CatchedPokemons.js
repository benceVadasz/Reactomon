import React from "react";
import { useStoreState } from "easy-peasy";
import Card from "../components/Card";

export default function Pokemons() {
  const pokemons = useStoreState((state) => state.pokemons);
  if (pokemons.length <= 0) {
    return <h3>No pokemons yet</h3>;
  }
  return (
    <h3>
      <h1>Catched Pokemons</h1>
      {pokemons.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon.name} />
      ))}
    </h3>
  );
}
