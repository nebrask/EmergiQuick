import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import logo from '../assets/logo.png';

const LoginScreen = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <Link to="/">
                    <img src={logo} alt="EmergiQuick Logo" className="auth-logo" />
                </Link>
                <h1 className="auth-title">Login to EmergiQuick</h1>
                <form className="auth-form" onSubmit={handleLogin}>
                    <input type="email" placeholder="Enter email" required className="input-field"/>
                    <input type="password" placeholder="Password" required className="input-field"/>
                    <button type="submit" className="btn-primary">Login</button>
                    <div className="auth-links">
                        <Link to="/password" className="helper-link">Forgot Password?</Link>
                        <Link to="/signup" className="helper-link">Don't have an account? Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;
