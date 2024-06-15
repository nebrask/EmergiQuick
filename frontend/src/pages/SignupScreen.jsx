import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.png';

const SignUpScreen = () => {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <Link to="/">
          <img src={logo} alt="EmergiQuick Logo" className="signup-logo" />
        </Link>
        <h1 className="signup-title">Sign Up to EmergiQuick</h1>
        <form className="signup-form" onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" required className="input-field"/>
          <input type="email" placeholder="Enter email" required className="input-field"/>
          <input type="password" placeholder="Password" required className="input-field"/>
          <input type="password" placeholder="Confirm Password" required className="input-field"/>
          <button type="submit" className="btn-primary">Sign Up</button>
          <div className="signup-links">
            <Link to="/login" className="helper-link">Already have an account? Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpScreen;
