import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pokemons from './pages/Pokemons';
import axios from 'axios'
import Types from './Types';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path="/pokemons/:id" children = {<PokemonDetail />} /> 
        <Route exact path="/pokemons" children = {<Pokemons pokemons={pokemons}/>} />
        <Route exact path="/types" children = {<Types exact path="/types" types={types}/>}/>
        </Router>
    </div>
  );
}

export default App;
