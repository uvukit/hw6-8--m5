import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <h1>Bookstore</h1>
        <span className={classes.icon}>
          <FontAwesomeIcon icon={faOpencart} />
        </span>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
