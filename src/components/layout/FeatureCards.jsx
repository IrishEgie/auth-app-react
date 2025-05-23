import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeatureCards = ({ img1, img2, img3 }) => {
  const cardsData = [
    {
      title: "Short title, long jacket",
      backgroundImage: `url('${img1}')`,
      location: "Earth",
      duration: "3d",
    },
    {
      title: "Much longer title that wraps to multiple lines",
      backgroundImage: `url('${img2}')`,
      location: "Pakistan",
      duration: "4d",
    },
    {
      title: "Another longer title belongs here",
      backgroundImage: `url('${img3}')`,
      location: "California",
      duration: "5d",
    },
  ];

  return (
    <Container className="px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Custom cards</h2>
      <Row xs={1} lg={3} className="g-4 py-5">
        {cardsData.map((card, index) => (
          <Col key={index}>
            <Card
              className="h-100 text-bg-dark rounded-4 shadow-lg card-cover overflow-hidden"
              style={{
                backgroundImage: card.backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {card.title}
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    <small>{card.location}</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2"></i>
                    <small>{card.duration}</small>
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureCards;
