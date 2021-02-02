import React from "react";
import "./App.css";
import Welcome from "./Components/Welcome";
import Home from "./Components/Search";
import Header from './Components/Header/Header';
import { Route, Switch} from "react-router-dom";
import LatestCocktails from "./Components/LatestCocktails";
import GrabLatest from './Components/GrabLatest';
import GrabPopular from './Components/GrabPopular';
import PopularCocktailsItem from './Components/PopularCocktailsItem';

function App() {
  return (
    <div>
      <div>
      <Header />
      </div>
      
      <Switch>
      <Route exact path='/popular/:id'>
         <PopularCocktailsItem/>
        </Route>
      <Route path='/popular'>
          <GrabPopular />
        </Route>
        <Route exact path='/latest/:id'>
          <LatestCocktails />
        </Route>
        <Route path='/latest'>
          <GrabLatest />
        </Route>

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
