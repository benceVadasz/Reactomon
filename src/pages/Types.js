import React, { useState, useEffect} from 'react';
import axios from "axios";
import Card from '../components/Card';

export default function Types() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type`).then((res) => {
          setTypes(res.data.results.map((p) => p.name));
        });
      }, []);
    return (
        <div>
            {types.map(p =>(
                <Card key={p.name}>
                    {p}
                </Card>
            ))}
        </div>
    )
}
