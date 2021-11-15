import React from "react";

function Search() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Exercises:</label>
      <input
        type="text"
        id="search"
        placeholder="Search an exercise..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
