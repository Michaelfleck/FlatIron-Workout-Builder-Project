import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <div id="navscroll">
      <h1>
        FlatIron Workout App
        <span className="logo" role="img">
        ❚█══█❚
        </span>
      </h1>
      <div id="navbar">
      <Link to="/exercise">Exercises</Link>
      {"\n"}
      <Link to="/exercise/new">Add New Exercise</Link>
      {"\n"}
      <Link to="/exercise/new/my-list">My Exercise List</Link>
      </div>
      </div>
    </header>
  );
}

export default Header;
