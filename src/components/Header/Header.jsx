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

      <div style={{justifyContent:'space-around'}}>
        <p style={{margin:'1em'}}>Welcome {user.name}, </p><hr/>
        <p style={{margin:'1em'}}> Logged In : {user.email}</p>
        <Link to="" onClick={handleLogOut}><button>Log-Out</button></Link>
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
