import {action, thunk, useStoreState} from "easy-peasy";
import {useEffect} from "react";
  
const catchedPokemons = {
  pokemons: [],
  addPokemon: action((state, pokemon) => {
    state.pokemons = [...state.pokemons, pokemon];
  })
  // , 
  // addPokemon: thunk(async actions =>{
  //   actions.addToLocalStorage();
  // }), 
  // addToLocalStorage: action((state) => {
  //   localStorage.setItem("caught", JSON.stringify(state.pokemons));
  // })
};


export default catchedPokemons;
