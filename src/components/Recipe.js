import React, { useEffect } from "react";
import RecipeItems from "./RecipeItems";
import Spinner from "./Spinner";

function Recipe({ match, getRecipes, recipes, loading }) {
  useEffect(() => {
    getRecipes(match.params.item);
  }, [match.params.item]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="gridContainer container">
        {recipes.map(recipe => (
          <RecipeItems key={recipe.recipe.label} recipe={recipe} />
        ))}
      </div>
    );
  }
}

export default Recipe;
