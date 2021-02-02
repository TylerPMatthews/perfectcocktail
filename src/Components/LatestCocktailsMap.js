import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
    img{
        width:13rem;
        height:13rem;
    }
`

const LatestCocktailsMap = (props) => {
    const {push} = useHistory()
    const onClick = () => {
        push(`/latest/${props.item.idDrink}`)
    }
    return (<StyledDiv onClick={onClick}>
        <h2>{props.item.strDrink}</h2>
        <img src={props.item.strDrinkThumb} alt={props.item.strDrink}/>
    </StyledDiv>)
}
export default LatestCocktailsMap;