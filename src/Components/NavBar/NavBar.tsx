import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const textStyles = { color: "white", textDecoration: "none" }
  return (
    <div className={styles.main}>
      <Link to="/" style={textStyles}>
        - Pick your Poison -
      </Link>
    </div>
  );
};

export default NavBar;
