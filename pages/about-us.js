import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookAssessment from "./components/BookAssessment";

export default function AboutUs() {
  return (
    <>
      <section className="ins-banner-sec">
        <div className="ins-banner-cover">
          <div className="ins-banner-body">
            <Container fluid="xxl">
              <div className="ins-banner-hd">
                <h1>
                  <span className="first-word">About</span> Company
                </h1>
                <h4>Forgives up to 90 percent of your liability</h4>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section className="page-intro-sec pt-5 pt-xl-6 pb-4 pb-xl-5">
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div className="page-intro-cover">
                <div className="page-intro-hd">
                  <h2>
                    Whatever your situation, there is a <br />
                    <span className="fc-100 fw-500">
                      debt-relief option for you.
                    </span>
                  </h2>
                </div>
                <h5>
                  Debtsolutions Group is a debt solutions company based in
                  Canada that specializes in debt management and debt relief
                  services.
                </h5>
                <p>
                  They offer a range of debt solutions such as debt
                  consolidation loans, debt settlement programs, debt management
                  plans, and bankruptcy assistance to help individuals and
                  businesses struggling with debt. Debsolutions Group aims to
                  help their clients become debt-free as quickly and efficiently
                  as possible.
                </p>
                <p>
                  They offer a range of debt solutions such as debt
                  consolidation loans, debt settlement programs, debt management
                  plans, and bankruptcy assistance to help individuals and
                  businesses struggling with debt. Debsolutions Group aims to
                  help their clients become debt-free as quickly and efficiently
                  as possible.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="welcome-sec pt-4 pt-xl-5 pb-4 pb-xl-8"
        data-aos="fadeIn"
      >
        <Container fluid="xxl">
          <Row>
            <Col xs="12" lg="6">
              <div className="welcome-img-cover">
                <div
                  className="welcome-img"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <img src="images/about-img.jpg" alt="Image" />
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
                <div className="wel-d-shape">
                  <img src="images/d-shape.svg" alt="D Shape" />
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div
                className="welcome-content"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="welcome-con-hd">
                  <h1>
                    <span>The right choice at the</span> right time.
                  </h1>
                </div>
                <h4>
                  If you're reading this website, then you already know you need
                  help. That's where we come in.
                </h4>
                <p>
                  Debt solutions Solutions Services Ltd. offers solutions to
                  your financial burdens that are tailored to be as unique as
                  you are. We will first educate you about the solutions
                  available, and then we'll help you make the right choices to
                  get your finances - and your life - back on track.
                </p>
                <p>
                  We know right now it feels like the world is on your
                  shoulders, but the right solution can be surprisingly
                  painless. The well-qualified, well-trained, and courteous
                  staff at GTA Credit Solutions are here to guide you every step
                  of the way.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="info-sec pt-4 pt-xl-5 pb-4 pb-xl-5">
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div className="section-hd">
                <h3>
                  <span className="fc-100 fw-500">What should you do now?</span>{" "}
                  <br />
                  Contact us, Faster than you think, you could…
                </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <div className="info-list">
                <div className="info-item">
                  <figure>
                    <div className="img-shape">
                      <img src="images/d-shape.svg" alt="Shape" />
                    </div>
                    <i>
                      <img src="images/info-icon-01.png" alt="Service" />
                      <img
                        className="hover"
                        src="images/info-icon-01.png"
                        alt="Info"
                      />
                    </i>
                  </figure>
                  <div className="info-body">
                    <p>
                      be making one small monthly payment for all your debts
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <figure>
                    <div className="img-shape">
                      <img src="images/d-shape.svg" alt="Shape" />
                    </div>
                    <i>
                      <img src="images/info-icon-02.png" alt="Service" />
                      <img
                        className="hover"
                        src="images/info-icon-02.png"
                        alt="Info"
                      />
                    </i>
                  </figure>
                  <div className="info-body">
                    <p>be free of threatening phone calls</p>
                  </div>
                </div>
                <div className="info-item">
                  <figure>
                    <div className="img-shape">
                      <img src="images/d-shape.svg" alt="Shape" />
                    </div>
                    <i>
                      <img src="images/info-icon-03.png" alt="Service" />
                      <img
                        className="hover"
                        src="images/info-icon-03.png"
                        alt="Info"
                      />
                    </i>
                  </figure>
                  <div className="info-body">
                    <p>be on the way to re-establishing your credit </p>
                  </div>
                </div>
                <div className="info-item">
                  <figure>
                    <div className="img-shape">
                      <img src="images/d-shape.svg" alt="Shape" />
                    </div>
                    <i>
                      <img src="images/info-icon-04.png" alt="Service" />
                      <img
                        className="hover"
                        src="images/info-icon-04.png"
                        alt="Info"
                      />
                    </i>
                  </figure>
                  <div className="info-body">
                    <p>reduce your debts </p>
                  </div>
                </div>
                <div className="info-item">
                  <figure>
                    <div className="img-shape">
                      <img src="images/d-shape.svg" alt="Shape" />
                    </div>
                    <i>
                      <img src="images/info-icon-05.png" alt="Service" />
                      <img
                        className="hover"
                        src="images/info-icon-05.png"
                        alt="Info"
                      />
                    </i>
                  </figure>
                  <div className="info-body">
                    <p>be free of wage garnishment</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="advantage-sec pt-4 pt-xl-5 pb-4 pb-xl-5">
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div className="adv-content">
                <div className="section-hd">
                  <h3>
                    The Debtsolutions<span className="fw-500"> advantage</span>
                  </h3>
                </div>
                <div className="adv-con-body">
                  <h4>We treat you like family.</h4>
                  <p>
                    This isn't just a line on a website; it's a professional and
                    personal philosophy we take very, very seriously. Offering
                    superior customer service is, quite simply, the only way we
                    do business. Like family, we're here to support you, guide
                    you, and make you feel like there's someone on your side.
                    The only thing we offer that a supportive family can't is
                    objectivity.
                  </p>
                </div>
                <div className="adv-con-body">
                  <h4>We Will</h4>
                  <ul>
                    <li>
                      Serve you with integrity and put your interests first.
                    </li>
                    <li>
                      Keep all of our interactions and your information
                      completely confidential.
                    </li>
                    <li>
                      Tell you the truth, even if it means challenging your
                      point of view. But we will do it with respect.
                    </li>
                    <li>
                      Take only those actions that are essential to restore your
                      financial well-being.
                    </li>
                    <li>
                      Never offer advice or take action that is beyond our
                      experience or competence.
                    </li>
                    <li>
                      Strive to match you with a counselor based on the
                      experience, knowledge, and expertise that best suits your
                      needs.
                    </li>
                    <li>
                      Immediately acknowledge any influence on our objectivity,
                      and offer to withdraw from a consultation in which our
                      integrity may be impaired.
                    </li>
                    <li>
                      Agree in advance to fees that are reasonable and
                      commensurate with the services we deliver and the
                      responsibility we accept.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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
