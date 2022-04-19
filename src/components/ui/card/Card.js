import React from "react";

import "./card.style.css";

const Card = ({ poke }) => {
  return (
    <div className="Card">
      <div className="Card__img">
        <img
          className="Card__img_sprites"
          src={poke.sprites.front_default}
          alt={`front ${poke.name}`}
        />
        {poke.sprites.back_default && (
          <img
            className="Card__img_sprites"
            src={poke.sprites.back_default}
            alt={`back ${poke.name}`}
          />
        )}
        {poke.sprites.other.dream_world.front_default && (
          <img
            className="Card__img_alternative"
            src={poke.sprites.other.dream_world.front_default}
            alt={`Offical Art${poke.name}`}
          />
        )}
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

      {/* -------- Base Stats -------- */}
      <p className="title_stat">Base Stats</p>
      <div className="Card__Stats">
        <div class="health-bar" data-total="1000" data-value="1000">
          <div
            class="bar"
            style={{
              width: `${poke.stats[1].base_stat}%`,
              background: "#c22e28",
            }}
          >
            <p className="stats">Atk: {poke.stats[1].base_stat}</p>
          </div>
        </div>

        <div class="health-bar" data-total="1000" data-value="1000">
          <div
            class="bar"
            style={{
              width: `${poke.stats[2].base_stat}%`,
              background: "#6390f0",
            }}
          >
            <p className="stats">Def: {poke.stats[2].base_stat}</p>
          </div>
        </div>

        <div class="health-bar" data-total="1000" data-value="1000">
          <div
            class="bar"
            style={{
              width: `${poke.stats[5].base_stat}%`,
              background: "#f7d02c",
            }}
          >
            <p className="stats">Sped: {poke.stats[5].base_stat}</p>
          </div>
        </div>
        <div class="health-bar" data-total="1000" data-value="1000">
          <div
            class="bar"
            style={{
              width: `${poke.stats[3].base_stat}%`,
              background: "#a33ea1",
            }}
          >
            <p className="stats">SpAtk:{poke.stats[3].base_stat}</p>
          </div>
        </div>
      </div>

      <div className="Card__data Card__data--ability">
        <p className="title_stat_abilities">Abilities</p>
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
