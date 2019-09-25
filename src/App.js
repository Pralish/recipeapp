import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Recipe from "./components/Recipe";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const APP_ID = "1820f3c6";
const APP_KEY = "d9d784c526560876ea982b0ca4a68bd7";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipes = item => {
    setLoading(true);
    fetch(
      `https://api.edamam.com/search?q=${item}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(response => response.json())
      .then(itemList => {
        setRecipes(itemList.hits);
        console.log(itemList.hits);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Router>
        <Search />
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + `/search/:item`}
            render={props => (
              <Recipe
                {...props}
                getRecipes={getRecipes}
                recipes={recipes}
                loading={loading}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
