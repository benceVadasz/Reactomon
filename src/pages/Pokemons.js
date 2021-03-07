import React, { useContext, useState, useEffect } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../contexts/ThemeContext";
import Pagination from "../components/Pagination";
import axios from "axios";

export default function Pokemons() {
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? " darkmode2" : "";
  const [pokemons, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState("");

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

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
  if (loading)
    return (
      <div className="App">
        <div className="loading">Loading...</div>
      </div>
    );
  return (
    <div className="big">
      <div className={"grid-container" + theme}>
        {pokemons.map((pokemon, i) => {
          return <Card key={i} pokemon={pokemon} />;
        })}
      </div>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </div>
  );
}
