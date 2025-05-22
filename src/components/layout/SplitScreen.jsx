import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SplitScreen.css'; // Make sure to create this file

export const SplitScreen = ({ leftContent, rightContent, topSpace = true, bottomSpace = true }) => {
  return (
    <Container fluid className="vh-100 p-0 d-flex flex-column">
      {/* Top Empty Space (Optional) */}
      {topSpace && <Row className="g-0 flex-grow-1" />}

      {/* Middle Row - Split Screen Content */}
      <Row className="g-0 justify-content-center flex-grow-0"> {/* flex-grow-0 prevents expansion */}
        {/* Left empty space (1 col) */}
        <Col xs={0} md={1} className="d-none d-md-block" />

        {/* Left Content (5 col) */}
        <Col md={5} className="left-bg d-flex align-items-center justify-content-center rounded-start-4">
          <div className="content-overlay">
            {leftContent}
          </div>
        </Col>

        {/* Right Content (5 col) */}
        <Col md={5} className=" border bg rounded-end-4 d-flex align-items-center justify-content-center">
          {rightContent}
        </Col>

        {/* Right empty space (1 col) */}
        <Col xs={0} md={1} className="d-none d-md-block" />
      </Row>

      {/* Bottom Empty Space (Optional) */}
      {bottomSpace && <Row className="g-0 flex-grow-1" />}
    </Container>
  );
};