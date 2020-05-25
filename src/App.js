import React, { useState, useEffect } from 'react';
import Cocktails from "./components/Cocktails"
import './App.css';

function App() {

const [drink, setDrink] = useState("");
const [search, setSearch] = useState("");
const [cocktails, setCocktails] = useState([]);

useEffect(() => {
  if (!drink) {
    return undefined;
  } 
  else {
  async function fetchMyApi() { 
  const response = 
  await fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${drink}`, {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
      }
    });
  const data = await response.json();
  setCocktails(data.drinks);
  }
  fetchMyApi();
  }
}, [drink])

const updateSearch = e => {
  setSearch(e.target.value);
}

const getCocktails = e => {
  e.preventDefault();
  setDrink(search);
  setSearch("");
}

  return (
    <div className="App">

      <div className="form">
        <input 
        type="text" 
        input={search} 
        onChange={updateSearch} 
        placeholder="Enter alcohol (vodka, gin, etc.)..."/>
          <button className="inputButton" onClick={getCocktails}>
          Search
          </button>
      </div>

      <div className="cocktails">
        {cocktails.map(drinks => (
        <Cocktails 
        key={drinks.idDrink}
        image={drinks.strDrinkThumb}
        title={drinks.strDrink}
        />))}
      </div>

    </div>
  );
}

export default App;
