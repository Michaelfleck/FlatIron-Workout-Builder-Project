import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        FlatIron Workout App
        <span className="logo" role="img">
        ❚█══█❚
        </span>
      </h1>
      <Link to="/exercise">Exercises</Link>
      {"\n"}
      <Link to="/exercise/new">Add New Exercise</Link>
      {"\n"}
      <Link to="/exercise/new/search">Search All Exercises</Link>
      {"\n"}
      <Link to="/exercise/new/search/my-list">My Exercise List</Link>
    </header>
  );
}

export default Header;
