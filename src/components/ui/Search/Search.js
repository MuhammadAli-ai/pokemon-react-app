import React from "react";

const Search = ({ className, placeholder, onChangeHandler }) => (
  <div className="SearchBarWrap">
    <input
      type="search"
      className={className}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default Search;
