import React from 'react';
import { useHistory } from 'react-router-dom';

const PopularCocktails = (props) => {
    const {push} = useHistory();
    const onClick = () => {
        push(`/popular/${props.item.idDrink}`)
    }
    return (
        <div onClick={onClick}>
            <h2>{props.item.strDrink}</h2>
            <img src={props.item.strDrinkThumb} alt={props.item.strDrink}/>
        </div>
    )
}
export default PopularCocktails;