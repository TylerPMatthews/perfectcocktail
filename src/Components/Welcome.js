import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../secret/Key";
import PopularCocktails from "./PopularCocktails";
import LatestCocktails from './LatestCocktails';
const Welcome = () => {
  const [popDrinks, setPopDrinks] = useState([]);
  const [latestDrinks, setLatestDrinks] = useState([])
  const grabPopular = () => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v2/${API_KEY}/popular.php`)
      .then((res) => {
        setPopDrinks(res.data.drinks);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Popular Cocktail error", err);
      });
  };
  const clearPopular = () => {
      setPopDrinks([])
  }

  const grabLatest = () => {
      axios
      .get(`https://www.thecocktaildb.com/api/json/v2/${API_KEY}/latest.php`)
      .then(res=>{
        console.log(res.data)
        setLatestDrinks(res.data.drinks)
      })
      .catch(err=>{
          console.log('Latest cocktail error', err)
      })
  }
  const clearLatest = () => {
      setLatestDrinks([])
  }

  return (
    <div>
      <h2>Hello! Welcome to Perfect Cocktail.</h2>
      <Link to="/home">Create Cocktail</Link>

      <div>
        <h3>Popular Cocktail's</h3>
        <button onClick={grabPopular}>Popular</button>
        <button onClick={clearPopular}>Clear Popular</button>
        <div>
          {popDrinks.map((item, idx) => {
            return <PopularCocktails item={item} key={idx} />;
          })}
        </div>
        <h3>Latest Cocktail's</h3>
        <button onClick={grabLatest}>Latest</button>
        <button onClick={clearLatest}>Clear Latest</button>
        <div>
          {latestDrinks.map((item, idx) => {
            return <LatestCocktails item={item} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Welcome;
