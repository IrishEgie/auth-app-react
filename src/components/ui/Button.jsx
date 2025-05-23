// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ variant = 'primary', children, onClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; // Make sure this export exists