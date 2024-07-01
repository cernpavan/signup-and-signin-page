import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Adjusted file name if needed

const Signup = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className='signup-page'>
      <h1>Sign Up</h1>
      <section>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Name' id='name' />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' id='email' />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password' id="password" />
        </div>
        <button type="submit">Sign Up</button>
        <button type="submit" onClick={handleLoginClick}>Login</button>
      </section>
    </div>
  );
};

export default Signup;
