import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import Select from "react-select";
import { useQuery } from "react-query";
import { getIngredients } from "../../Scripts/network-functions";
import styles from "./SearchBar.module.css";

type selectObject = { label: string; value: string };
type Props = {
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ setSearchTerm }: Props) => {
  const [inputValue, setInputValue] = useState({ label: "", value: "" });

  const { data, error } = useQuery("ingredients", getIngredients);

  const ingredients = useMemo(() => {
    if (!data) return;
    return data.drinks
      .map((it: { strIngredient1: string }) => ({
        value: it.strIngredient1,
        label: it.strIngredient1,
      }))
      .sort((a: selectObject, b: selectObject) =>
        a.label > b.label ? 1 : b.label > a.label ? -1 : 0
      );
  }, [data]);

  const handleSearchClick = () => {
    setSearchTerm(inputValue.value);
  };
  if (error) return <h6>there has been an error, oops</h6>;
  return (
    <div className={styles.main}>
      {/* <select
        className={styles.searchInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      >
        <option disabled value='' > - Pick your poison - </option>
        {ingredients && ingredients.map((it: Ingredient) => (
          <option key={it.strIngredient1} value={it.strIngredient1}>{it.strIngredient1}</option>
        ))}
      </select> */}
      <div style={{ width: "80%" }}>
        <Select
          value={inputValue}
          name="search"
          options={ingredients}
          onChange={(e) => setInputValue(e ?? { label: "", value: "" })}
        />
      </div>
      <button className={styles.searchButton} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
