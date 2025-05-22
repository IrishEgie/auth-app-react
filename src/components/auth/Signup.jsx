// src/components/auth/Signup.jsx
import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const Signup = ({ switchToLogin }) => {
  return (
    <div className="w-75 p-4">
      <h2 className="text-center mb-4">Sign Up</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Sign Up
        </Button>
      </Form>
      <p className="text-center mt-3">
        Already have an account?{' '}
        <Button variant="link" onClick={switchToLogin}>
          Login
        </Button>
      </p>
    </div>
  );
};