import React from "react";

import "./card.style.css";

const Card = ({ poke }) => {
  return (
    <div className="Card">
      <div className="Card__img">
        <img src={poke.sprites.front_default} alt={poke.name} />
        <img src={poke.sprites.back_default} alt={poke.name} />
      </div>
      <div className="Card__name">{poke.name}</div>
      <div className="Card__types">
        {poke.types.map((type, i) => {
          return (
            <div key={i} className={`${type.type.name} Card__type`}>
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="Card__info">
        <div className="Card__data Card__data--weight">
          <p className="title">Weight</p>
          <p>{poke.weight / 10}kg</p>
        </div>
        <div className="Card__data Card__data--height">
          <p className="title">Height</p>
          <p>{poke.height / 10}m</p>
        </div>
        <div className="Card__data Card__data--height">
          <p className="title">Base HP</p>
          <p>{poke.stats[0].base_stat}HP</p>
        </div>
      </div>
      <div className="Card__data Card__data--ability">
        <p className="title center">Abilities</p>
        <div className="Card__multiple--abilities">
          {poke.abilities.map((action, i) => {
            return <p key={i}>{action.ability.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
