import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pokemons from './pages/Pokemons';
import axios from 'axios'
import Types from './Types';
import PokemonDetail from './components/PokemonDetail';

function App() {
  const [pokemons, setPokemon] = useState([]);
  const [loading, setLoading] = useState('');
  
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res=> {
    setLoading(false)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    setPokemon(res.data.results);
    })
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
