import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import logo from '../assets/logo.png';

const PasswordScreen = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <Link to="/">
          <img src={logo} alt="EmergiQuick Logo" className="auth-logo" />
        </Link>
        <h1 className="auth-title">Reset Password</h1>
        <form className="auth-form">
          <input type="email" placeholder="Enter your email" required className="input-field" />
          <button type="submit" className="btn-primary">Send Reset Link</button>
        </form>
        <div className="auth-links">
          <Link to="/login" className="helper-link">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default PasswordScreen;
