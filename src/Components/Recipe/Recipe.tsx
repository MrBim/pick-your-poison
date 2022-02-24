import React, { useMemo, Fragment } from "react";
import Ingredient from "../Ingredient/Ingredient";
import Ingredients from "../Ingredients/Ingredients";
import Measures from "../Measures/Measures";
import styles from "./Recipe.module.css";

type RecipeObj = {
  dateModified: string | null;
  idDrink: string | null;
  strAlcoholic: string | null;
  strCategory: string | null;
  strCreativeCommonsConfirmed: string | null;
  strDrink: string | null;
  strDrinkAlternate: string | null;
  strDrinkThumb: string | null;
  strGlass: string | null;
  strIBA: string | null;
  strImageAttribution: string | null;
  strImageSource: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strInstructions: string | null;
  strInstructionsDE: string | null;
  strInstructionsES: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  "strInstructionsZH-HANS": string | null;
  "strInstructionsZH-HANT": string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strTags: string | null;
  strVideo: string | null;
};
type Props = {
  recipe: RecipeObj;
};

const Recipe = ({ recipe }: Props) => {
  return (
    <div className={styles.main}>
      {recipe.strDrinkThumb ? (
        <img src={recipe.strDrinkThumb} className={styles.backgroundImage} />
      ) : null}
      <div className={styles.content}>
        <h1>{recipe.strDrink}</h1>
        <div style={{display: 'flex'}}>
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
