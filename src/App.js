import "./App.css";
import React, { useState, useEffect,  } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pokemons from "./pages/Pokemons";
import axios from "axios";
import Types from "./pages/Types";
import PokemonDetail from "./components/PokemonDetail";
import Pagination from "./components/Pagination";
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  const [pokemons, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results);
      });
    return () => cancel();
  }, [currentPageUrl]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type`).then((res) => {
      setTypes(res.data.results.map((p) => p.name));
    });
  }, []);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
  if (loading) return (<div className="App"><div className="loading">Loading...</div></div>);
  return (
    <div className="App">
      <ThemeContextProvider>
      <Router>
        <Navbar />
        <Route exact path="/pokemon/:id" children={<PokemonDetail />} />
        <Route
          exact
          path="/pokemons"
          children={<Pokemons pokemons={pokemons} />}
        />
        <Route
          exact
          path="/types"
          children={<Types types={types} />}
        />
      </Router>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
