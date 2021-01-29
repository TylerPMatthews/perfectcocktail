import React, {useState} from 'react';
import axios from 'axios';
import LatestCocktailsMap from './LatestCocktailsMap';
import { API_KEY } from "../secret/Key";
const GrabLatest = () => {
    const [latestDrinks, setLatestDrinks] = useState([])
    const grabCocktail = () => {
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
    return(
        <div>
            <h3>Latest Cocktail's</h3>
        <button onClick={grabCocktail}>Latest</button>
        <button onClick={clearLatest}>Clear Latest</button>

        <div>
          {latestDrinks.map((item, idx) => {
            return <LatestCocktailsMap item={item} key={idx} />;
          })}
        </div>
        </div>
    )
}
export default GrabLatest;