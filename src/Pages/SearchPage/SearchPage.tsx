import React, { useState } from "react";
import { callbackify } from "util";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResults from "../../Components/SearchResults/SearchResults";
import styles from './SearchPage.module.css'

const SearchPage = () => {
  const [searchFor, setSearchFor] = useState("");
  return (
    <div className={styles.main}>
      {/* <img src='/drinks.jpg' className={styles.backgroundImage} /> */}
      <SearchBar setSearchTerm={setSearchFor} />
      {!!searchFor ? <SearchResults searchFor={searchFor} /> : null}
    </div>
  );
};

export default SearchPage;
