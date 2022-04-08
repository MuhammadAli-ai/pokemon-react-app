import React from "react";

const Search = ({ className, placeholder, onChangeHandler }) => (
  <input
    type="search"
    className={className}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default Search;
