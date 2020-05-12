import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Recipe from './components/Recipe'
import './App.css';
import hardCodedRecipes from './data.json' // used to avoid making multiple API calls when styling
require('dotenv').config()

function App() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('pie') 
  const [recipes, setRecipes] = useState(hardCodedRecipes.hits)
  
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
      console.log()
    })
  }

  useEffect(hook, [query])

  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <h1>Recip-easy</h1>
          <p>Where finding great dishes to cook is a piece of cake</p>
          <br />
          <form onSubmit={handleSubmit}>
            <input value={search} onChange={handleSearch} className="search-bar" placeholder=" eg. Cake"/>
            <input type="submit" value="Search" className="search-button" /><br />
          </form>
        </div>
      </div>
      <br />
      <div className='recipes'>
        {recipes.map(recipe => <Recipe key={recipe.recipe.label} recipe={recipe} /> )}
      </div>
    </div>
  );
}

export default App;
