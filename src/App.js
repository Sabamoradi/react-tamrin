import React, { useState } from "react";
import Views from "./views";
import "./styles/root.css";
import RouteFile from "./route/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Views />
        <RouteFile />
      </Router>
    </>
  );
}

export default App;

//when we should use {} for importing items ?
// how we can bind more than one class for item
//why we should use use reducer when we have redux
//why we should have ... in set item in tabs
//advantage of have asyncronous data in action of state management
//find out what is the route of our component
