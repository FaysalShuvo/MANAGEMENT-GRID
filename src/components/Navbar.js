import "./Navbar.css";
import logo from "../assets/logo.png";

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <span>Management Grid</span>
        </Link>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
