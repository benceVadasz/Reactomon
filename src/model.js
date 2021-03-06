import {action} from "easy-peasy";

const catchedPokemons = {
  pokemons: [],
  addPokemon: action((state, pokemon) => {
    state.pokemons = [...state.pokemons, pokemon];
  })
};

export default catchedPokemons;
