import React, { useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResults from "../../Components/SearchResults/SearchResults";
import styles from './SearchPage.module.css'

const SearchPage = () => {
  const [searchFor, setSearchFor] = useState("");
  return (
    <div className={styles.main}>
      <SearchBar setSearchTerm={setSearchFor} />
      {!!searchFor ? <SearchResults searchFor={searchFor} /> : null}
    </div>
  );
};

export default SearchPage;
