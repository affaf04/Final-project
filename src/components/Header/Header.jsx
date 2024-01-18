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
        <img style={{ width: '300px' ,height: '100px', padding: '0px'}} className="logo" src={logo} alt="logo" />

        <div className="right">
          <Link to="/orders/new" >New Order</Link>
          <Link to="/cart" >Cart</Link>
        </div>
        {user ? (
          <div className="right">
            <div className="welcome">
              <span>Welcome {user.name}</span>
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
