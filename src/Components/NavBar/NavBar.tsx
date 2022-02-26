import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.main}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        - Pick your Poison -
      </Link>
    </div>
  );
};

export default NavBar;
