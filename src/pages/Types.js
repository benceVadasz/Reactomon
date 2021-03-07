import React, { useState, useEffect} from 'react';
import axios from "axios";

export default function Types() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type`).then((res) => {
          setTypes(res.data.results.map((p) => p.name));
        });
      }, []);
    return (
        <div className="type-container">
            {types.map(p =>(
                <div className="type-div" key={p.name}>
                    <p className="type-name">{p}</p>
                </div>
            ))}
        </div>
    )
}
