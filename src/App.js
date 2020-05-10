import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Recipe from './components/Recipe'
import './App.css';
require('dotenv').config()

function App() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')
  const [recipes, setRecipes] = useState([])
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search)    
  }

  const hook = () => {
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAME_ID}&app_key=${process.env.REACT_APP_EDAMAME_KEY}`).then(res => {
      setRecipes(res.data.hits)
    })
  }

  useEffect(hook, [query])

  return (
    <div className="App">
      <h1>Recip-easy</h1>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={handleSearch}></input>
        <input type="submit" value="submit" />
      </form>
      <br />
      {recipes.map(recipe => <Recipe key={recipe.recipe.label} recipe={recipe} /> )}
    </div>
  );
}

export default App;
