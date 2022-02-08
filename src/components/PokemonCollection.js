import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons, search}) {
  const [searchedPoke, setSearchedPoke] = useState([])
 
  
  useEffect(()=> {
    setSearchedPoke(searchedPoke => pokemons.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase())))
  }, [search])

  const pokemonsMap = searchedPoke.length > 0 ? 
    searchedPoke.map(poke => <PokemonCard key={poke.id} pokemon={poke}/>) :
    pokemons.map(poke => <PokemonCard key={poke.id} pokemon={poke}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonsMap}
    </Card.Group>
  );
}

export default PokemonCollection;
