import React from "react";

import Spinner from "../spinner/Spinner";
import Card from "./Card";

const CardList = ({ pocketMonsters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="grid-container">
      {pocketMonsters.map((poke, i) => {
        return <Card key={i} poke={poke} />;
      })}
    </div>
  );
};

export default CardList;

// !How did this work??
// !edit the search box and making it more appealing than
// !watch that monsters video and write down what they did and how and make sense of it.
// !Write this up maybe post on the reddit reactjs page and
// TODO make search bar better looking
// TODO can you make lightmode and darkMode
// TODO figure out how to filter by pokemon type?
//
