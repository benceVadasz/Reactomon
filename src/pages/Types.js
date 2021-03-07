import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import axios from "axios";

export default function Types() {
    const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? " darkmode2" : "";
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type`).then((res) => {
          setTypes(res.data.results.map((p) => p.name));
        });
      }, []);
    return (
        <div className={"type-container"+ theme}>
            {types.map(t =>(
                <div className="type-div" key={t.name}>
                    <p className="type-name">{t}</p>
                </div>
            ))}
        </div>
    )
}
