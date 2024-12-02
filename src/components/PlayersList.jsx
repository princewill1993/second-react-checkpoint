import React from "react";

import { players } from "../utilis/Players";
import Player from "./Player";

function PlayersList() {
  return (
    <div>
      {players.map((item) => {
        return (
          <Player
            key={item.id}
            name={item.name}
            team={item.team}
            nationality={item.nationality}
            jersey_num={item.jersey_num}
            age={item.age}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default PlayersList;
