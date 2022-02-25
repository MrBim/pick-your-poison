import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { getCocktails } from "../../Scripts/network-functions";
import ResultCard from "../ResultCard/ResultCard";
import styles from './SearchResults.module.css';

type Props = {
  searchFor: string;
};

const SearchResults = ({ searchFor }: Props) => {
  const { data, error } = useQuery(["drink search", searchFor], () =>
    getCocktails(searchFor)
  );
  const cocktails = useMemo(() => {
    if (!data) return;
    return data.drinks;
  }, [data]);
  console.log('cocktails', cocktails)
  if (error) return <h2>an unknown error has occurred</h2>;
  return (
    <div className={styles.main}>
      {cocktails && cocktails.map((it: Card) => (
          <ResultCard card={it} key={it.idDrink} />
      ))}
    </div>
  );
};

export default SearchResults;
