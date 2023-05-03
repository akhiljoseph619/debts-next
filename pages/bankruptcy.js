import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TalkToUs from "./components/TalkToUs";
import BookAssessment from "./components/BookAssessment";

export default function Bankruptcy() {
  return (
    <>
      <section className="ins-banner-sec">
        <div className="ins-banner-cover">
          <div className="ins-banner-body">
            <Container fluid="xxl">
              <div className="ins-banner-hd">
                <h1>
                  <span className="first-word">Bankruptcy</span>
                </h1>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section
        className="page-intro-sec pt-5 pt-xl-6 pb-4 pb-xl-5"
        data-aos="fadeIn"
      >
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div className="page-intro-cover">
                <div className="page-intro-hd">
                  <h2>
                    Consumer proposals as a debt settlement plan in canada{" "}
                    <br />
                    <span className="fc-100 fw-500">
                      What are Consumer Proposals?
                    </span>
                  </h2>
                </div>
                <h5>
                  As an honest but unfortunate debtor, you may choose to use the
                  legal process of bankruptcy, regulated by the Act, to obtain a
                  discharge from your debts (subject to reasonable conditions).
                  Declaring bankruptcy means that your secured creditors cannot
                  take legal steps to recover what you owe them, such as seizing
                  your property or garnisheeing your wages.
                </h5>
                <p>
                  If you owe more than $1,000 and have carefully reviewed all
                  your options, declaring bankruptcy may be the right choice to
                  make.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-xl-5 pb-4 pb-xl-5">
        <Container>
          <Row>
            <Col xs="12">
              <div className="bankruptcy-video">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/UrBj3TFSf20"
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="con-pro-sec pt-4 pt-xl-5 pb-4 pb-xl-5"
        data-aos="fadeIn"
      >
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div className="con-pro-item">
                <figure>
                  <div
                    className="con-item-img"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <img src="images/bankruptcy-item-01.jpg" alt="Image" />
                  </div>
                  <div className="particle-cover">
                    <div className="particle-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 45 45"
                        className="particle-svg"
                      >
                        <path d="M29.8 22L40.4 32.6 33.4 39.7 22.8 29.1 12.1 39.7 5.1 32.6 15.7 22 5.1 11.4 12.1 4.3 22.8 14.9 33.4 4.3 40.4 11.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="con-d-shape">
                    <img src="images/d-shape.svg" alt="D Shape" />
                  </div>
                </figure>
                <div
                  className="con-pro-body"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <p>
                    Perhaps the most common question those considering
                    bankruptcies ask is, “Will I lose all my assets?” Happily,
                    the answer is no. There are several exemptions from seizure.
                    They are:
                  </p>
                  <ul>
                    <li>Household furnishings to a value of $13,150</li>
                    <li>Personal effects to a value of $5,650</li>
                    <li>Tools of trade to a value of $11,300</li>
                    <li>Motor vehicles to a value of $6,600</li>
                    <li>Farmers' business assets to a value of $29,100</li>
                    <li>Certain life insurance policies</li>
                    <li>Most pensions</li>
                    <li>Certain RRSPs</li>
                  </ul>
                  <p>
                    If you're involved in a close financial relationship, it is
                    possible to file a joint assignment that will be dealt with
                    as one file. Your debts must be substantially the same, and
                    the trustee must believe it is in the best interest of all
                    parties.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <TalkToUs />

      <section
        className="book-sec ins-book-sec py-4 py-lg-5 py-xl-6"
        data-aos="fadeIn"
      >
        <div className="book-bg-graphics">
          <div className="particle-item part-item-01">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 32 32"
              className="particle-svg"
            >
              <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
            </svg>
          </div>
        </div>
        <BookAssessment />
      </section>
    </>
  );
}
