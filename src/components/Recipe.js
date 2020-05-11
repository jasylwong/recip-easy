import React from 'react'

const Recipe = ({ recipe }) => {
  return (
    <div key={recipe.label} className='recipe-container'>
      <div className='recipe-label'>{recipe.recipe.label}</div>
      <p className='recipe-image'><img src={recipe.recipe.image} /></p>
      <div className='recipe-ingredients'>{recipe.recipe.ingredientLines}</div>
    </div>
  )
}

export default Recipe;