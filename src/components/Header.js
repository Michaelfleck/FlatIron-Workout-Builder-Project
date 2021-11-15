import React from "react";
import Search from "./Search";

function Header() {
  return (
    <header>
      <h1>
        FlatIron Workout App
        <span className="logo" role="img">
        ❚█══█❚
        </span>
      </h1>
      <Search />
    </header>
  );
}

export default Header;
