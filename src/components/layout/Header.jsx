// src/components/layout/Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useAuth } from "../../hooks/useAuth";

const Header = ({ onLogout }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleAuthRedirect = () => {
    navigate("/login");
  };

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
            src="/logo.png"
            alt="RBG Logo"
            width="50"
            height="50"
            className="d-inline-block align-top rounded-circle"
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
              Contact us
            </Nav.Link>
            <Nav.Link as={Link} to="/price">
              Pricing
            </Nav.Link>
            {/* Conditionally render Dashboard link */}
            {currentUser && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {currentUser ? (
              <button
                className="nav-link d-flex align-items-center gap-2 w-100 bg-transparent border-0"
                onClick={onLogout}
              >
                <i className="bi bi-box-arrow-right"></i>
                Sign Out
              </button>
            ) : (
              <Button
                variant="primary"
                className="d-flex align-items-center gap-2"
                onClick={handleAuthRedirect}
              >
                <i className="bi bi-box-arrow-in-right"></i>
                Sign In
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;