import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../secret/Key";
import SearchedCocktail from "./SearchedCocktail";

const Home = () => {
  const [formValues, setFormValues] = useState("");
  const [search, setSearched] = useState([]);

  const searchCocktail = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v2/${API_KEY}/search.php?s=${formValues}`
      )
      .then((res) => {
        setSearched(res.data.drinks);
        setFormValues("");
      })
      .catch((err) => {
        console.log("Axios search cocktail error", err.response);
      });
  };
  const randomCocktail = (e) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/${API_KEY}/random.php`)
      .then((res) => {
        e.preventDefault();
        setSearched(res.data.drinks);
      })
      .catch((err) => {
        console.log("axios random search error", err.response);
      });
  };

  const clearSearched = () => {
    setSearched([]);
  };

  const onChange = (e) => {
    setFormValues(e.target.value);
  };
  console.log(search);
  return (
    <div>
      <h2>Cocktail Creator</h2>
      <form onSubmit={searchCocktail}>
        <h3>Search a cocktail</h3>
        <label>
          {" "}
          Cocktail
          <input
            type="text"
            placeholder="name"
            onChange={onChange}
            value={formValues}
            name="name"
          />
        </label>
        <button>Create Cocktail</button>
        <button onClick={clearSearched}>Clear Cocktail</button>
      </form>

      <button onClick={randomCocktail}>Random Cocktail</button>
      <div>
        {search.map((item, idx) => {
          return <SearchedCocktail item={item} key={idx} />;
        })}
      </div>
    </div>
  );
};
export default Home;
