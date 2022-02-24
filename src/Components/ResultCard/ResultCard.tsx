import React from "react";
import { Link } from "react-router-dom";
import styles from "./ResultCard.module.css";

type Card = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type Props = {
  card: Card;
};

const ResultCard = ({ card }: Props) => {
  return (
    <div className={styles.main}>
        <div>
        <h2 className={styles.drinkName}>{card.strDrink}</h2>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={card.strDrinkThumb} />
      </div>
      <div>
        <Link className={styles.drinkLink} to={`/recipe/${card.idDrink}`}>See Recipe</Link>
      </div>
    </div>
  );
};

export default ResultCard;
