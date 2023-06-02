import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <section className="sec-top-pd-lg sec-btm-pd-lg">
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div className="coming-soon thanks-cover">
                <figure>
                  <div className="thanks-icon">
                    <img src="images/paper-plane.svg" alt="Thank You" />
                  </div>
                </figure>
                <div className="thanks-body">
                  <h2>
                    <span className="color-red">Thank You</span> <br /> for your
                    submission
                  </h2>
                  <p>Your response was submitted. We will get back to You!</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
