// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { Main } from './pages/Main';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import Dashboard from './pages/Dashboard';
import Price from './pages/Price';


import { SplitScreen } from './components/layout/SplitScreen';
import { AuthSide } from './components/layout/AuthSide';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <Route
            path="/*"
            element={
              <SplitScreen
                leftContent={<AuthSide isLogin={isLogin} />}
                rightContent={
                  isLogin ? (
                    <Login switchToSignup={() => setIsLogin(false)} onLogin={handleLogin} />
                  ) : (
                    <Signup switchToLogin={() => setIsLogin(true)} onSignup={handleLogin} />
                  )
                }
              />
            }
          />
        ) : (
          <>
            <Route path="/" element={<Main onLogout={handleLogout} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/price" element={<Price />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
