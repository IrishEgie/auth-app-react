// src/components/auth/Login.jsx
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';

export const Login = ({ switchToSignup, onLogin }) => {
  const [formData, setFormData] = useState({
    identifier: '',  // Changed from email to identifier
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [validated, setValidated] = useState(false);
  const { login, error, clearError } = useAuth();
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) clearError();
  };

  const isValidIdentifier = (value) => {
    if (!value) return false;
    // Accept either email format or username with min 3 chars
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || value.length >= 3;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValidIdentifier(formData.identifier) || formData.password.length < 8) {
      setValidated(true);
      return;
    }

    const success = await login(
      {
        identifier: formData.identifier,
        password: formData.password
      },
      rememberMe  // Pass rememberMe to auth service
    );
    
    if (success) {
      setSuccessMessage('Login successful! Redirecting...');
      setTimeout(() => {
        onLogin();
      }, 1000);
    }
  };

  return (
    <div className="w-75 p-4">
      <h2 className="text-center mb-4">Login</h2>

      {error && (
        <Alert variant="danger" onClose={clearError} dismissible>
          {error}
        </Alert>
      )}

      {successMessage && (
        <Alert variant="success" dismissible onClose={() => setSuccessMessage('')}>
          {successMessage}
        </Alert>
      )}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formIdentifier">
          <Form.Label>Email or Username</Form.Label>
          <Form.Control
            type="text"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            placeholder="Enter email or username"
            required
            isInvalid={validated && !isValidIdentifier(formData.identifier)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email or username (min 3 characters).
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            minLength={8}
            isInvalid={validated && formData.password.length < 8}
          />
          <Form.Control.Feedback type="invalid">
            Password must be at least 8 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRememberMe">
          <Form.Check 
            type="checkbox"
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mb-3">
          Login
        </Button>
      </Form>

      <p className="text-center mt-3">
        Need an account?{' '}
        <Button
          variant="link"
          onClick={() => {
            clearError();
            switchToSignup();
          }}
          className="p-0"
        >
          Sign Up
        </Button>
      </p>
    </div>
  );
};