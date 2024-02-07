import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  let urlParams = new URLSearchParams(window.location.search);
  return (
    <nav>
      <h4>
        Welcome to {urlParams.get("location")}, {urlParams.get("name")}!
      </h4>
      <ul>
        <li>
          <Link to={"/"}>Homepage</Link>
        </li>
        <li>
          <Link to={"/addfilm"}>Add Film Listing</Link>
        </li>
        <li>
          <Link to={"/films"}>Current Films</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
