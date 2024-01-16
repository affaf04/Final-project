import React from "react";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'
import './Header.css'

function Header ({user ,setUser}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <>
      <nav className='header'>

      <div style={{justifyContent:'space-between'}}>
        <p style={{}}>Welcome {user.name}, </p><hr/>
        <p style={{}}> Logged In : {user.email}</p>
        <Link to="" onClick={handleLogOut}><button className='button'>Log-Out</button></Link>
      </div>
       <div  className='navlinks'>
        <Link to="/orders">Order History</Link>

        <Link to="/orders/new">New Order</Link>
       </div>
        
      </nav>
    </>
  );
}

export default Header;
