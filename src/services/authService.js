// src/services/authService.js

// Simple password hashing (not production-grade)
const simpleHash = (str) => btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, ''));

export const registerUser = (userData) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Check if user exists by email or username
  if (users.some(u => u.email === userData.email)) {
    throw new Error('Email already registered');
  }
  if (users.some(u => u.username === userData.username)) {
    throw new Error('Username already taken');
  }

  const newUser = {
    ...userData,
    password: simpleHash(userData.password), // Simple obfuscation
    createdAt: new Date().toISOString()
  };

  localStorage.setItem('users', JSON.stringify([...users, newUser]));
  return newUser;
};

export const loginUser = ({ identifier, password }, rememberMe = false) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Check against both email and username
  const user = users.find(u => 
    (u.email === identifier || u.username === identifier) && 
    u.password === simpleHash(password)
  );

  if (!user) throw new Error('Invalid credentials');
  
  // Store session based on rememberMe choice
  const storage = rememberMe ? localStorage : sessionStorage;
  storage.setItem('currentUser', JSON.stringify(user));
  return user;
};

export const logoutUser = () => {
  // Clear from both storage locations
  localStorage.removeItem('currentUser');
  sessionStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
  // Check both storage locations
  return JSON.parse(localStorage.getItem('currentUser')) || 
         JSON.parse(sessionStorage.getItem('currentUser'));
};

// Optional: Add session validation
export const validateSession = () => {
  const user = getCurrentUser();
  if (!user) return false;
  
  // Additional checks could be added here (e.g., token expiry)
  return true;
};