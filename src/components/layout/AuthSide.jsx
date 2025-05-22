// src/components/layout/AuthSide.jsx
import React from 'react';

export const AuthSide = ({ isLogin }) => {
  return (
    <div className="text-white text-center p-5">
      <div className="text-center mb-4">
        <img
          src="/logo.png" // Make sure this is in your public folder
          alt="Logo illustration"
          className="img-fluid rounded-circle shadow"
          style={{ maxHeight: '65px' }}
        />
      </div>
      <h1>{isLogin ? 'Welcome Back!' : 'Join Us!'}</h1>
      <p>{isLogin ? 'Sign in to access your account.' : 'Create an account to get started.'}</p>
    </div>
  );
};