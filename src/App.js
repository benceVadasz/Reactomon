import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import model from "./model";
import Navbar from "./components/Navbar";
import Pokemons from "./pages/Pokemons";
import Types from "./pages/Types";
import PokemonDetail from "./components/PokemonDetail";
import ThemeContextProvider from "./contexts/ThemeContext";
import CatchedPokemons from "./pages/CatchedPokemons";

function App() {
  
  
  const store = createStore(model);

  return (
    <div className="App">
      <ThemeContextProvider>
        <StoreProvider store={store}>
          <Router>
            <Navbar />
            <Route exact path="/pokemon/:id" children={<PokemonDetail />} />
            <Route
              exact
              path="/pokemons"
              children={<Pokemons/>}
            />
            <Route exact path="/types" children={<Types />} />
            <Route
              exact
              path="/catched-pokemons"
              children={<CatchedPokemons />}
            />
          </Router>
        </StoreProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
