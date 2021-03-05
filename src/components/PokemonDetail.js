import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../contexts/ThemeContext";

const PokemonDetail = () => {
  let { id } = useParams();
  const [currentPokemonData, setcurrentPokemonData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? " darkmode2" : "";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setcurrentPokemonData(result.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className={"pok-contailer" + theme}>
      <div className="card-container">
        <img
          className="pokimg"
          src={currentPokemonData.sprites.front_default}
          alt=""
        />
        <div className="name-div">
          <p className="name"> {currentPokemonData.name.toUpperCase()}</p>
        </div>
        <div>
          <div className="attributes">
            <div className="type-div">
              <p className="title">Type</p>
              {currentPokemonData.types.map((type) => {
                return <p className="type">{type.type.name}</p>;
              })}
            </div>
            <div className="weight">
              <p className="title">Weight</p>
              <p>{currentPokemonData.weight}</p>
            </div>
            <div className="height">
              <p className="title">Height</p>
              <p>{currentPokemonData.height}</p>
            </div>
          </div>
          <div className="ability">
            <p className="title">Ability</p>
            <p>{currentPokemonData.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
