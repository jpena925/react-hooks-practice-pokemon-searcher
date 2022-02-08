import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemons, handleAddPokemon}) {
  const [search, setSearch] = useState('')


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={pokemons} search={search}/>
    </Container>
  );
}

export default PokemonPage;
