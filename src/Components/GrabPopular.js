import React, { useState } from "react";
import axios from "axios";
import {API_KEY} from '../secret/Key';
import PopularCocktails from "./PopularCocktails";
const GrabPopular = () => {
  const [popDrinks, setPopDrinks] = useState([]);

  const grabPopularDrinks = () => {
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
    setPopDrinks([]);
  };
  return (
    <div>
      <div>
        <h3>Popular Cocktail's</h3>
        <button onClick={grabPopularDrinks}>Popular</button>
        <button onClick={clearPopular}>Clear Popular</button>
      </div>
      <div>  {popDrinks.map((item, idx) => {
        return <PopularCocktails item={item} key={idx} />;
      })}</div>
    
    </div>
  );
};
export default GrabPopular;
