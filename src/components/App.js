import React from "react";
import { Route, Switch } from 'react-router';
import ExercisePage from "./ExercisePage";
import Header from "./Header";

function App() {
  return (
    <Route path="/home">
      <div className="app">
        <Header />
        <ExercisePage />
      </div>
    </Route>
  );
}

export default App;
