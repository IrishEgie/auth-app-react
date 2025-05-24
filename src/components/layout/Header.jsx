// src/components/layout/Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { getCurrentUser } from "../../services/authService";

const Header = ({ onLogout, isAuthenticated }) => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser(); // Get current user info for display

  const handleAuthRedirect = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    // Navigate to home after logout
    navigate("/");
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
            {isAuthenticated && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <div className="d-flex align-items-center gap-3">
                {currentUser && (
                  <span className="text-muted">
                    Welcome, {currentUser.username || currentUser.email}
                  </span>
                )}
                <button
                  className="btn btn-outline-secondary d-flex align-items-center gap-2"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right"></i>
                  Sign Out
                </button>
              </div>
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