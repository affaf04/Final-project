import React from "react";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'
import './Header.css'


function Header({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <>
      <nav className='header'>
        <div className='navlinks'>
          <Link to="/orders">Order History</Link>
          <Link to="/orders/new">New Order</Link>
          {/* <link to="/cart"> Cart </link> */}
        </div>
        
        {user ? (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ margin: '1em' }}>Welcome {user.name}, Logged In: {user.email}</p>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <Link to="" onClick={handleLogOut}><button className='button'>Log-Out</button></Link>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/signup" style={{ marginLeft: '1em' }}>Sign Up</Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
