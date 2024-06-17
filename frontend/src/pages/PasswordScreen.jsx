import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.png';

const PasswordScreen = () => {
  return (
    <div className="password-page">
      <div className="password-container">
        <Link to="/">
          <img src={logo} alt="EmergiQuick Logo" className="password-logo" />
        </Link>
        <h1 className="password-title">Reset Password</h1>
        <form className="password-form">
          <input type="email" placeholder="Enter your email" required className="input-field" />
          <button type="submit" className="btn-primary">Send Reset Link</button>
        </form>
        <div className="password-links">
          <Link to="/login" className="helper-link">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default PasswordScreen;
