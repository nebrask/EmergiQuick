import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.png';

const LandingScreen = () => {
    return (
      <div className="landing-page">
        <header className="landing-header">
          <div className="logo">
            <Link to="/">
                <img src={logo} alt="EmergiQuick Logo" className="logo-img" />
            </Link>
          </div>
          <nav className="nav">
            <Link to="/why">Why EmergiQuick?</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="btn-signup">Sign Up</Link>
          </nav>
        </header>
        <section className="hero">
          <h1>Healing yourself is connected with healing others.</h1>
          <p>The most rapid access to essential emergency medical information.</p>
          <Link to="/signup" className="btn-start">Get Started</Link> 
        </section>
      </div>
    );
  }
  
  export default LandingScreen;
