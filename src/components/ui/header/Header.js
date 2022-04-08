import React from "react";

import logo from "../../../img/pokemon.png";

const Header = () => {
  return (
    <header className="pokemon--logo">
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
