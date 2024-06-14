import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingScreen from './pages/LandingScreen';
import WhyEmergiQuickScreen from './pages/WhyEmergiQuickScreen';
import ContactScreen from './pages/ContactScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import PasswordScreen from './pages/PasswordScreen';
import DashboardScreen from './pages/DashboardScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/why" element={<WhyEmergiQuickScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/password" element={<PasswordScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
