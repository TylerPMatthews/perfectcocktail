import React from 'react';
import { useHistory } from 'react-router-dom';

const LatestCocktailsMap = (props) => {
    const {push} = useHistory()
    const onClick = () => {
        push(`/latest/${props.item.idDrink}`)
    }
    return (<div onClick={onClick}>
        <h2>{props.item.strDrink}</h2>
    </div>)
}
export default LatestCocktailsMap;