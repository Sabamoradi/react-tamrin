import React, { useState } from "react";
import Views from "./views";
import "./styles/root.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BirthdayReminder from "./views/1-BirthdayReminder";
import Tours from "./views/2-Tours";
import Reviews from "./views/3-Reviews";
import Accordion from "./views/4.Accordion/index";
import Menu from "./views/5.Menu/index";
// import Tabs from "./views/6.Tabs/index";
// import Lorem from './views/8-lorem'
// import Navbar from './views/11-navbar'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Views />
          </Route>
          <Route path="/birthday">
            <BirthdayReminder />
          </Route>
          <Route path="/tours">
            <Tours />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/accordion">
            <Accordion />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
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
