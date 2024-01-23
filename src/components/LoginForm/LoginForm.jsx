// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './login.css'
import { Route, Navigate } from 'react-router-dom';

export default function LoginForm({ setUser }) {
  
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    await setUser(user)


  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div className='main'>      
  
    <h3>HEY GORGEOUS <br></br>
     Welcome Back!</h3>

    <div className="form-container" onSubmit={handleSubmit}>   
      <form autoComplete="off" >
        <label>Email</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button type="submit">LOG IN</button>

      </form>
    </div>
    <span className="error-message">&nbsp;{error}</span>
  </div>
);
}