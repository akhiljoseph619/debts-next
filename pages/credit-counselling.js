import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TalkToUs from './components/TalkToUs';
import BookAssessment from './components/BookAssessment';

export default function ConsumerProposal() {
  return (
    <>
      <section className="ins-banner-sec">
        <div className="ins-banner-cover">
          <div className="ins-banner-body">
            <Container fluid="xxl">
              <div className="ins-banner-hd">
                <h1>
                  <span className="first-word">Credit Counselling</span>
                </h1>

              </div>
            </Container>
          </div>
        </div>
      </section>

      <section
        className="con-pro-sec pt-4 pt-xl-6 pb-4 pb-xl-5"
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
                    <img src="images/credit-coun-item-01.jpg" alt="Image" />
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
                  <div className="con-pro-hd">
                    <h3>What is credit counselling?</h3>
                  </div>
                  <p>
                    Credit counselling is a valuable tool for anyone seeking to
                    improve their financial literacy and avoid future debt
                    issues. Even if you haven't experienced a bankruptcy or
                    consumer proposal, credit counselling can help you learn how
                    to properly manage your money and make smart financial
                    decisions.
                  </p>
                  <p>
                    At our organization, we're committed to helping Canadians
                    gain control of their finances through credit counselling.
                    Our experienced counsellors will work with you to create a
                    personalized financial plan that fits your unique situation
                    and goals. We'll provide you with the knowledge and
                    resources you need to make informed financial decisions and
                    achieve long-term financial stability.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="welcome-sec pt-4 pt-xl-5 pb-4 pb-xl-5"
        data-aos="fadeIn"
      >
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div className="con-pro-item con-reverse">
                <figure>
                  <div
                    className="con-item-img"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <img src="images/credit-coun-item-02.jpg" alt="Image" />
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
                  <div className="con-pro-hd">
                    <h3>Financial guidance from licensed professionals</h3>
                  </div>
                  <p>
                    Our team has been providing credit counselling services in
                    Canada. We understand that managing money can be
                    overwhelming, especially when you've been struggling with
                    debt for a long time. That's why our team is patient,
                    understanding, and passionate about helping people take
                    control of their finances.
                  </p>
                  <p>
                    When you work with us, you'll receive top-notch money
                    management skills and education. We'll equip you with the
                    tools and knowledge you need to make informed financial
                    decisions and avoid debt problems in the future. With
                    confidence and courage, you'll learn how to make your money
                    work for you, not the other way around.
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
