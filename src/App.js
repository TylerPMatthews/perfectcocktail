import React from "react";
import "./App.css";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import { Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
