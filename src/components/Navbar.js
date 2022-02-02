import "./Navbar.css";
import logo from "../assets/logo.png";

import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <span>Management Grid</span>
        </Link>

        {user ? (
          <li>
            {isPending ? (
              <button className="btn" disabled>
                Login out..
              </button>
            ) : (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
          </li>
        ) : (
          <>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
