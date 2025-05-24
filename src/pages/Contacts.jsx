import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const Contacts = ({ onLogout }) => {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Static Header */}
      <div className="flex-shrink-0">
        <Header onLogout={onLogout} />
      </div>

      {/* Main Content - No Scroll, Full Height */}
      <div className="flex-grow-1">
        <Container fluid className="h-100">
          <Row className="h-100">
            {/* Left Side – Placeholder Image */}
            <Col
              md={6}
              className="rounded-end-4 d-none d-md-block p-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1596729235333-ab2c2ecb5410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Right Side – Contact Form */}
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center bg-light"
            >
              <div className="p-5 w-100" style={{ maxWidth: "500px" }}>
                <h2 className="mb-4 text-center">Get in Touch</h2>
                <p className="text-muted text-center mb-4">
                  Reach out to RBG Editor's team — whether it’s a question, idea, or support request.
                </p>
                <Form>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" required />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="your@email.com" required />
                  </Form.Group>

                  <Form.Group controlId="formSubject" className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="What's this about?" required />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Type your message here..."
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Static Footer */}
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
};
