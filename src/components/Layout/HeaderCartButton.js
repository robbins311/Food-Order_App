import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

const HeaderCartButton = () => {
  return (
    <div className={classes.button}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>0</div>
    </div>
  );
};

export default HeaderCartButton;
