import React from "react";

import Spinner from "../loading/Loading";
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
