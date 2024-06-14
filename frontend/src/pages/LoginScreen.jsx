import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.png';

const LoginScreen = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <Link to="/">
                    <img src={logo} alt="EmergiQuick Logo" className="login-logo" />
                </Link>
                <h1 className="login-title">Login to EmergiQuick</h1>
                <form className="login-form" onSubmit={handleLogin}>
                    <input type="email" placeholder="Enter email" required className="input-field"/>
                    <input type="password" placeholder="Password" required className="input-field"/>
                    <button type="submit" className="btn-primary">Login</button>
                    <div className="login-links">
                        <Link to="/password" className="helper-link">Forgot Password?</Link>
                        <Link to="/signup" className="helper-link">Don't have an account? Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;
