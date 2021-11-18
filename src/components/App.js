import React from "react";
import Header from "./Header";
import ExercisePage from "./ExercisePage";

// import { Route } from 'react-router';

function App() {
  return (
    <div className="app">
      <Header />
        {/* <Route path="/exercise"> */}
          <ExercisePage />
        {/* </Route> */}
    </div >
  );
}

export default App;
