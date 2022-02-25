import React from "react";
import Ingredients from "../Ingredients/Ingredients";
import Measures from "../Measures/Measures";
import styles from "./Recipe.module.css";

type Props = {
  recipe: RecipeObj;
};

const Recipe = ({ recipe }: Props) => {
  return (
    <div className={styles.main}>
      {recipe.strDrinkThumb ? (
        <img
          src={recipe.strDrinkThumb}
          className={styles.backgroundImage}
          alt={recipe.strDrink ?? ""}
        />
      ) : null}
      <div className={styles.content}>
        <h1>{recipe.strDrink}</h1>
        <div style={{ display: "flex" }}>
          <Ingredients recipe={recipe} />
          <Measures recipe={recipe} />
        </div>
        <h2>Glass</h2>
        <ul>
          <li>{recipe.strGlass}</li>
        </ul>

        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
