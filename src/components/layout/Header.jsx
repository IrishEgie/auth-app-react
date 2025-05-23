// src/components/layout/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ onLogout }) => {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      className="custom-navbar pt-5 sticky-top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png" // ✅ use public folder reference
            alt="RBG Logo"
            width="50"
            height="50"
            className="d-inline-block align-top rounded-circle" // 👈 makes it circular
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contacts">
              Contacts
            </Nav.Link>
            <Nav.Link as={Link} to="/price">
              Pricing
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
