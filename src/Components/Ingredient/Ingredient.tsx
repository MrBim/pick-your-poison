import React from "react";

type Props = {
  ingredient: {
    ingredient: string | null;
    ingredientName: string;
  };
};

const Ingredient = ({ ingredient }: Props) => {
  return <li>{ingredient.ingredient} :</li>;
};

export default Ingredient;
