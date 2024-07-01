import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Adjusted file name if needed

const Login = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className='login-page'>
      <h1>Login</h1>
      <section>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' id='email' />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password' id="password" />
        </div>
        <p>Lost password? <a href="#">Click here!</a></p> {/* Adjust anchor tag if necessary */}
        <button type="submit" onClick={handleSignupClick}>Sign Up</button>
        <button type="submit">Login</button>
      </section>
    </div>
  );
};

export default Login;
