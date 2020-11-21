import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {

  const APP_ID = process.env.REACT_APP_APP_ID;
  const API_KEY = process.env.REACT_APP_APP_KEY;
 

  console.log(process.env.REACT_APP_APP_KEY);
  console.log(process.env.REACT_APP_APP_ID);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    GetRecipes();
  }, [query]);

  const GetRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const UpdateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={UpdateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="Recipes">
        {recipes.map(recipe => (
          <Recipe title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          img={recipe.recipe.image} 
          key={recipe.recipe.label} 
          ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
