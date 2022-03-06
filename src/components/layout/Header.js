import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
