import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { useQuery } from "react-query";
import { getIngredients } from "../../Scripts/network-functions";
import styles from "./SearchBar.module.css";

type Ingredient = {
  strIngredient1: string;
}

type Props = {
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ setSearchTerm }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const {data, error } = useQuery('ingredients', getIngredients)

  const ingredients = useMemo(() => {
    if (!data) return;
    return data.drinks; // TODO sort here
  }, [data])

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
  };
  if (error) return <h6>there has been an error, oops</h6>
  return (
    <div className={styles.main}>
      <select
        className={styles.searchInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      >
        <option disabled value='' > - Pick your poison - </option>
        {ingredients && ingredients.map((it: Ingredient) => (
          <option key={it.strIngredient1} value={it.strIngredient1}>{it.strIngredient1}</option>
        ))}
      </select>
      <button className={styles.searchButton} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
