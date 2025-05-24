import { Container, Row, Col, Card } from "react-bootstrap";

const FeatureCards = ({
  FCtitle = "Custom Cards",
  img1,
  img2,
  img3,
  title1 = "Short title, long jacket",
  title2 = "Much longer title that wraps to multiple lines",
  title3 = "Another longer title belongs here",
  location1 = "Earth",
  location2 = "Pakistan",
  location3 = "California",
  duration1 = "3d",
  duration2 = "4d",
  duration3 = "5d",
}) => {

  const cardsData = [
    {
      title: title1,
      backgroundImage: `url('${img1}')`,
      location: location1,
      duration: duration1,
    },
    {
      title: title2,
      backgroundImage: `url('${img2}')`,
      location: location2,
      duration: duration2,
    },
    {
      title: title3,
      backgroundImage: `url('${img3}')`,
      location: location3,
      duration: duration3,
    },
  ];

  return (
    <Container className="px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">{FCtitle || "Section Title"}</h2>
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
                      src="/logo.png"
                      alt="Bootstrap"
                      width="48"
                      height="48"
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
      <hr className="featurette-divider" />
    </Container>
  );
};

export default FeatureCards;
