import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useStoreState } from "easy-peasy";
import Card from "../components/Card";

export default function Pokemons() {
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? " darkmode2" : "";
  const pokemons = useStoreState((state) => state.pokemons);
  if (pokemons.length <= 0) {
    return <h3>No pokemons yet</h3>;
  }
  return (
    <div className="big">
      <h1 className={"caught-h"+theme}>Caught Pokemons</h1>
      <h3 className={"caught-container"+theme}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.name} />
        ))}
      </h3>
    </div>
  );
}
