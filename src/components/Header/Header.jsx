import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./Header.css";
import logo from "./logo.png";

function Header({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <>
      <nav className="header">
        <div className="navlinks">
          <Link to="/"> Home </Link>
          <Link to="/orders">Order History</Link>
        </div>
        <div className="right">
        <img className="logo" src={logo} alt="logo" />
          <Link to="/orders/new" className="order">New Order</Link>
          <Link to="/cart" className="cart">Cart</Link>
        </div>
        {user ? (
          <div className="right">
            <div className="welcome">
              <p>Welcome {user.name}</p>
            </div>
            <div className="logout">
              <Link to="" onClick={handleLogOut}>
                <button className="button">Log-Out</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="right">
            <Link to="/auth/login">
              {" "}
              <button className="btn">Login</button>
            </Link>
            <Link to="/auth/signup" style={{  marginLeft: "1em" }}>
              {" "}
              <button className="btn"> Sign Up </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
