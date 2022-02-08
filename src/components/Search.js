import React, { useState } from "react";

function Search({ onPokeSearch, search, setSearch }) {


  function handleSearch(e){
    setSearch(search => e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
