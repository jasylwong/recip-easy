import React from 'react'

const Recipe = ({ recipe }) => {
  return (
    <div key={recipe.label}>
      <div >{recipe.recipe.label}</div>
      <img src={recipe.recipe.image} />
    </div>
  )
}

export default Recipe;