import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <section className="sec-top-pd-lg sec-btm-pd-lg">
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div className="coming-soon">
                <h2>Coming Soon</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
