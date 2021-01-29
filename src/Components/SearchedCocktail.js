import React from "react";

const SearchedCocktail = (props) => {
  return (
    <div key={props.item.idDrink}>
      <h2>{props.item.strDrink}</h2>
      <img src={props.item.strDrinkThumb} />
    </div>
  );
};
export default SearchedCocktail;
