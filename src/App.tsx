import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PokemonSearch } from './component/pokemon-search/pokemonSearch';

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonSearch name="John Doe" numberOfPokemons={5} />
    </div>
  );
}

export default App;
