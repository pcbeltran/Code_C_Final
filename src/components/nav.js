import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav(props) {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/account">
        {props.user ? "Account" : "Login"}
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/">
        All Breeds
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/add">
        Add Breed
      </Link>
    </nav>
  );
}

export default Nav;
