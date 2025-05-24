import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Featurette = ({
  heading,
  subheading,
  description,
  imageSrc = null,
  reverse = false,
}) => {
  return (
    <Container className="py-5">
      <Row className={`featurette align-items-center ${reverse ? "flex-row-reverse" : ""}`}>
        <Col md={7}>
          <h2 className="featurette-heading fw-normal lh-1">
            {heading}{" "}
            <span className="text-body-secondary">{subheading}</span>
          </h2>
          <p className="lead">{description}</p>
        </Col>
        <Col md={5}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={heading}
              className="img-fluid mx-auto d-block rounded-4"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          ) : (
            <svg
              aria-label="Placeholder: 500x500"
              className="bd-placeholder-img bd-placeholder-img-lg img-fluid mx-auto rounded-4"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text
                x="50%"
                y="50%"
                fill="var(--bs-secondary-color)"
                dy=".3em"
                textAnchor="middle"
              >
                500x500
              </text>
            </svg>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Featurette;
