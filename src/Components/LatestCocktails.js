import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../secret/Key";
import styled from "styled-components";
const StyledDiv = styled.div`
text-align: center;
  h2 {
    color: blue;
  }
  img {
    height: 15rem;
    width: 15rem;
    margin:2.5%;
  }
  p{
    margin:5%;
  }

  ul{
    background-color:black;
    color:red;
    padding:2%;
    
  }
`

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



  return (
    <div>
      {latest.map((item, idx) => {
        return (
          <StyledDiv key={idx}>
            <h2>{item.strDrink}</h2>
            <div>
              <img src={item.strDrinkThumb} alt={item.strDrink} />
            </div>

            <p>Category: {item.strCategory}</p>
            <p>{item.strAlcoholic}</p>
            <p>{item.strGlass}</p>

            <ul>
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
            </ul>
            <p>{item.strInstructions}</p>
          </StyledDiv>
        );
      })}
    </div>
  );
};
export default LatestCocktails;
