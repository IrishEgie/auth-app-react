// src/hooks/useAuth.js
import { useState } from 'react';
import { registerUser, loginUser, logoutUser, getCurrentUser } from '../services/authService';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  const register = async (userData) => {
    try {
      const user = await registerUser(userData);
      setCurrentUser(user);
      clearError();
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // Ensure login function passes rememberMe
  const login = async (credentials, rememberMe = false) => {
    try {
      const user = await loginUser(credentials, rememberMe);
      setCurrentUser(user);
      clearError();
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const logout = () => {
    logoutUser();
    setCurrentUser(null);
    clearError();
  };

  return { 
    currentUser,
    error,
    clearError, // Make sure this is returned
    register,
    login,
    logout
  };
};