// import { render } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom';
// import PokemonDetail from './PokemonDetail';

export default function Card({pokemon}) {

    let pokemonOrder = pokemon.url.split('/');
    let id = pokemonOrder.slice(-2)[0];
    return (
        <div className="Card">
            
            <div className="Card__name">
                <Link className="link-card" to={'/pokemon/'+ id}>
                    <span className="link-text">{pokemon.name}</span>
                </Link> 
            </div>
            
        </div>
    );
}
