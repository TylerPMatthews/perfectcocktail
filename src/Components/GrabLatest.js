import React, {useState} from 'react';
import axios from 'axios';
import LatestCocktailsMap from './LatestCocktailsMap';
import { API_KEY } from "../secret/Key";
import styled from 'styled-components';

const StyledDiv = styled.div`
  button{
    background-color:blue;
    color:white;
    text-align:center;
    padding:1.5%;
    border-radius:15px;
  }

`
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
        <StyledDiv>
            <h3>Latest Cocktail's</h3>
        <button onClick={grabCocktail}>Latest</button>
        {(latestDrinks.length !== 0) ? <button onClick={clearLatest}>Clear Latest</button> : <div></div>}

        <div>
          {latestDrinks.map((item, idx) => {
            return <LatestCocktailsMap item={item} key={idx} />;
          })}
        </div>
        </StyledDiv>
    )
}
export default GrabLatest;