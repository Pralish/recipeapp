import React, { useState } from "react";
import { Link } from "react-router-dom";

function RecipeItems({ recipe }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={setHover(true)}
      onMouseLeave={setHover(false)}
      className="gridItems"
    >
      <img
        src={recipe.recipe.image}
        style={{ width: "200px", borderRadius: "50%" }}
      />
      <h3>{recipe.recipe.label}</h3>
      <a href={recipe.recipe.url} className="btn btn-white">
        More
      </a>

      <div className={hover ? "ingredients" : ""}>
        <ol>
          {recipe.recipe.ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeItems;
