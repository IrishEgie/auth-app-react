// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutUser } from './services/authService';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { Main } from './pages/Main';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import Dashboard from './pages/Dashboard';
import Price from './pages/Price';
import { SplitScreen } from './components/layout/SplitScreen';
import { AuthSide } from './components/layout/AuthSide';

// Wrapper components to handle navigation
const LoginWrapper = ({ onLogin }) => {
  const navigate = useNavigate();
  
  return (
    <SplitScreen
      leftContent={<AuthSide isLogin={true} />}
      rightContent={
        <Login 
          switchToSignup={() => navigate('/signup')} 
          onLogin={onLogin} 
        />
      }
    />
  );
};

const SignupWrapper = ({ onSignup }) => {
  const navigate = useNavigate();
  
  return (
    <SplitScreen
      leftContent={<AuthSide isLogin={false} />}
      rightContent={
        <Signup 
          switchToLogin={() => navigate('/login')} 
          onSignup={onSignup} 
        />
      }
    />
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check auth state on initial load
  useEffect(() => {
    const user = getCurrentUser();
    setIsAuthenticated(!!user);
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    logoutUser();
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Or your custom loading component
  }

  return (
    <Router>
      <Routes>
        {/* Main application routes - accessible to everyone */}
        <Route path="/" element={<Main onLogout={handleLogout} isAuthenticated={isAuthenticated} />} />
        <Route path="/about" element={<About onLogout={handleLogout} isAuthenticated={isAuthenticated} />} />
        <Route path="/contacts" element={<Contacts onLogout={handleLogout} isAuthenticated={isAuthenticated} />} />
        <Route path="/price" element={<Price isAuthenticated={isAuthenticated} />} />
        
        {/* Protected route - only for authenticated users */}
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? (
              <Dashboard onLogout={handleLogout} isAuthenticated={isAuthenticated} />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />

        {/* Auth routes */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <LoginWrapper onLogin={handleLogin} />
            )
          }
        />
        
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <SignupWrapper onSignup={handleLogin} />
            )
          }
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;