import React from 'react';
import axios from 'axios';
import {API_KEY} from '../secret/Key';
export const PopularCocktail = () => {
    axios
    .get(`https://www.thecocktaildb.com/api/json/v2/${API_KEY}/popular.php`)
    .then(res=>{
        return res
    })
    .catch(err=>{
        console.log('Popular Cocktail error', err)
    })
}