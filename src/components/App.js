import React from "react";
import Header from "./Header";
import ExercisePage from "./ExercisePage";
import Footer from "./Footer";

// import { Route } from 'react-router';

function App() {
  return (
    <div className="app">
      <Header />
        {/* <Route path="/exercise"> */}
          <ExercisePage />
        {/* </Route> */}
      <Footer />
    </div >
  );
}

export default App;
