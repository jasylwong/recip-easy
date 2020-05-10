import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState([])
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    axios.get()
  })
  return (
    <div className="App">
      <h1>Recip-easy</h1>
      <input value={search} onChange={handleSearch}></input>
      <br />
      
    </div>
  );
}

export default App;
