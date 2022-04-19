import React from "react";

// import spinner from "../../../img/spinner.gif";

import pokemonLoading from "../../../img/pokemonLoading.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={pokemonLoading}
        alt="loading"
        style={{ width: "400px", margin: "auto", display: "block" }}
      />
      <h1 className="loading">Loading...</h1>
    </>
  );
};

export default Spinner;
