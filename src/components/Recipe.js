// import React from 'react'

// const Recipe = ({ recipe }) => {
//   return (
//     <div key={recipe.label} className='recipe-container'>
//       <div className='recipe-label'>{recipe.recipe.label}</div>
//       <p className='recipe-image'><img src={recipe.recipe.image} /></p>
//       <div className='recipe-ingredients'>{recipe.recipe.ingredientLines}</div>
//     </div>
//   )
// }

// export default Recipe;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 20
  },
  media: {
    height: 300,
  },
});

export default function Recipe({ recipe }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={recipe.recipe.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {recipe.recipe.label}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Recipe
        </Button>
      </CardActions>
    </Card>
  );
}
