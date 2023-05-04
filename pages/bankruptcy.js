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
                <h4>Forgives up to 90 percent of your liability</h4>
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
                    <span className="fc-100 fw-500">
                      Get a fresh financial start with bankruptcy
                    </span>
                  </h2>
                </div>
                <p>
                  If you're an honest debtor who has fallen on hard times, you
                  can opt for the legal process of bankruptcy, which is overseen
                  by the Act. This process allows you to obtain a discharge from
                  your debts, subject to certain conditions. By declaring
                  bankruptcy, your secured creditors are prevented from taking
                  legal action to collect what you owe them, such as seizing
                  your assets or garnishing your wages.
                </p>
                <p>
                  If you have debts exceeding $1,000 and have thoroughly
                  considered all your alternatives, filing for bankruptcy could
                  be the appropriate decision to take.
                </p>
                <p></p>
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
                    One of the most common questions asked by those
                    contemplating bankruptcy is, "Will I lose all of my assets?"
                    Fortunately, the answer is no. There are several exemptions
                    from seizure, including:
                  </p>
                  <ul>
                    <li>Household furnishings valued up to $13,150</li>
                    <li>Personal effects valued up to $5,650</li>
                    <li>Tools of trade valued up to $11,300</li>
                    <li>Motor vehicles valued up to $6,600</li>
                    <li>Farmers' business assets valued up to $29,100</li>
                    <li>Certain life insurance policies</li>
                    <li>Most pensions</li>
                    <li>Certain RRSPs</li>
                  </ul>
                  <p>
                    In case you have a close financial relationship with someone
                    else, it is possible to file a joint assignment that will be
                    treated as a single file. However, your debts must be
                    similar in nature, and the trustee must determine that it is
                    beneficial for all parties involved.
                  </p>
                  <p>
                    We offer a range of services, including credit counseling,
                    consumer proposals, and bankruptcy. Regardless of your
                    financial situation, there is a path that's suitable for
                    you, and we are here to assist you in finding it. Let's work
                    together to determine the best course of action for you.
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
