import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

const URL = 'http://localhost:3001/pokemon'
function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setPokemons(pokemons => data))
  }, [])

  function onAddPokemon(poke){
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(poke)
    })
    .then(res => res.json())
    .then(data => setPokemons(pokemons => [...pokemons, data]))
  }

  return (
    <div className="App">
      <PokemonPage pokemons={pokemons} handleAddPokemon={onAddPokemon}/>
    </div>
  );
}

export default App;
