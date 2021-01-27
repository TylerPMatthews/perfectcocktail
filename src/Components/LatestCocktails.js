import React from 'react';
const LatestCocktails = (props) => {
    return(
        <div>
             <h2>{props.item.strDrink}</h2>
            <img src={props.item.strDrinkThumb}/>
        </div>
    )
}
export default LatestCocktails;