import React from 'react'
import Card from '../components/Card'

export default function Pokemons({pokemons}) {
    return (
        <div className="grid-container">
              {pokemons.map((pokemon, i) => {
                return <Card key={i} order={i} pokemon={pokemon} />
                })}
        </div>
    )
}
