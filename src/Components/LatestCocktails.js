import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../secret/Key";
const LatestCocktails = (props) => {
  const [latest, setLatest] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v2/${API_KEY}/lookup.php?i=${id}`
      )
      .then((res) => {
        setLatest(res.data.drinks);
      })
      .catch((err) => {
        console.log("Grab Cocktail ID error", err.response);
      });
  }, []);

  console.log(latest);

  return (
    <div>
      {latest.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>{item.strDrink}</h2>
            <span>Category: {item.strCategory}</span>
            <span>{item.strAlcoholic}</span>
            <p>{item.strGlass}</p>
            <ol>
              <h3>Ingredients</h3>
              {item.strIngredient1 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient1}</li>
              )}
              {item.strIngredient2 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient2}</li>
              )}
              {item.strIngredient3 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient3}</li>
              )}
              {item.strIngredient4 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient4}</li>
              )}
              {item.strIngredient5 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient5}</li>
              )}
              {item.strIngredient6 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient6}</li>
              )}
              {item.strIngredient7 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient7}</li>
              )}
              {item.strIngredient8 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient8}</li>
              )}
              {item.strIngredient9 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient9}</li>
              )}
              {item.strIngredient10 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient10}</li>
              )}
              {item.strIngredient11 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient11}</li>
              )}
              {item.strIngredient12 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient12}</li>
              )}
              {item.strIngredient13 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient13}</li>
              )}
              {item.strIngredient14 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient14}</li>
              )}
              {item.strIngredient15 === null || "" ? (
                <div></div>
              ) : (
                <li>{item.strIngredient15}</li>
              )}
            </ol>
          </div>
        );
      })}
    </div>
  );
};
export default LatestCocktails;
