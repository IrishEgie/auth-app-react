import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container as="footer" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className=" mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Home">
          <img src="/logo.png" alt="Logo" width="32" height="32" className="rounded-circle" />
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">© {new Date().getFullYear()} RBG Editor. All rights reserved</span>
      </div>
    </Container>
  );
};

export default Footer;
