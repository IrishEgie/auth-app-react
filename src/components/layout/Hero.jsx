import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Hero = ({ title, subtitle, imageSrc, buttonText = "Get Started", route = "/" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <Container className="col-xxl-8 px-4 py-5">
      <Row className=" flex-lg-row-reverse align-items-center g-5 py-5">
        {/* Image Section */}
        <Col xs={10} sm={8} lg={6}>
          <img
            src={imageSrc || "/illustration.jpg"}
            className="d-block mx-lg-auto img-fluid rounded-4"
            alt="Hero Illustration"
            width="700"
            height="500"
            loading="lazy"
          />
        </Col>

        {/* Text Section */}
        <Col lg={6}>
          <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
          <p className="lead">{subtitle}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button variant="primary" size="lg" className="px-4 me-md-2" onClick={handleClick}>
              {buttonText}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
