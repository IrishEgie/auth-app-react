// src/components/auth/Signup.jsx
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';

export const Signup = ({ switchToLogin, onSignup }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [validated, setValidated] = useState(false);
  const auth = useAuth();
  const { error, register } = auth;
  const clearError = auth.clearError || (() => {}); // Fallback if undefined
  const [successMessage, setSuccessMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error && clearError) clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false || formData.password !== formData.confirmPassword) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

  const result = await register({
    username: formData.username,
    email: formData.email,
    password: formData.password
  });

  if (result) {
    onSignup(); // 👈 Redirect logic kicks in via App.js
  }

  };

  const passwordsMatch = formData.password === formData.confirmPassword;
  const isPasswordValid = formData.password.length >= 8;

  return (
    <div className="w-75 p-4">
      <h2 className="text-center mb-4">Sign Up</h2>

      {error && (<Alert variant="danger" onClose={clearError} dismissible>{error}</Alert>)}

      {successMessage && (
        <Alert variant="success" dismissible onClose={() => setSuccessMessage('')}>
          {successMessage}
        </Alert>
      )}


      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
            minLength={3}
          />
          <Form.Control.Feedback type="invalid">
            Username must be at least 3 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
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
            isInvalid={validated && !isPasswordValid}
          />
          <Form.Control.Feedback type="invalid">
            Password must be at least 8 characters.
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Minimum 8 characters
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            isInvalid={validated && !passwordsMatch}
          />
          <Form.Control.Feedback type="invalid">
            Passwords must match.
          </Form.Control.Feedback>
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          className="w-100 mb-3"
          disabled={!isPasswordValid || !passwordsMatch}
        >
          Sign Up
        </Button>
      </Form>

      <p className="text-center mt-3">
        Already have an account?{' '}
        <Button 
          variant="link" 
          onClick={() => {
            if (clearError) clearError();
            switchToLogin();
          }}
          className="p-0"
        >
          Login
        </Button>
      </p>
    </div>
  );
};