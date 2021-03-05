import React, {useContext} from 'react'
import Card from '../components/Card'
import { ThemeContext } from '../contexts/ThemeContext';

export default function Pokemons({pokemons}) {
    const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? ' darkmode2' : ''; 

    return (
        <div className={"grid-container"+(theme)}>
              {pokemons.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />
                })}
        </div>
    )
}
