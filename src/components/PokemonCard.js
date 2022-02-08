import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [front, setFront] = useState(true)

  function handleImageSwitch(){
    setFront(front => !front)
  }
  return (
    <Card>
      <div>
        <div className="image" onClick={handleImageSwitch}>
          <img alt="oh no!" src={front ? pokemon.sprites.front : pokemon.sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
