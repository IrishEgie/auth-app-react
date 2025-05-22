// src/components/auth/Login.jsx
import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const Login = ({ switchToSignup }) => {
  return (
    <div className="w-75 p-4">
      {/* Inserted Image Here */}
      <h2 className="text-center mb-4">Login</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Login
        </Button>
      </Form>
      <p className="text-center mt-3">
        Need an account?{' '}
        <Button variant="link" onClick={switchToSignup}>
          Sign Up
        </Button>
      </p>
    </div>
  );
};