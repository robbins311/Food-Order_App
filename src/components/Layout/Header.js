import React from "react";

import classes from "./Header.module.css";
import meals from "../../assets/img/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton />
      </div>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals" />
      </div>
    </>
  );
};

export default Header;
