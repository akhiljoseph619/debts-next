import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import BookAssessment from './components/BookAssessment';

export default function ContactUs() {
  return (
    <>
      <section className="ins-banner-sec">
        <div className="ins-banner-cover">
          <div className="ins-banner-body">
            <Container fluid="xxl">
              <div className="ins-banner-hd">
                <h1>
                  <span className="first-word">Contact Us</span>
                </h1>
                <h4>Forgives up to 75 percent of your liability</h4>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section
        className="welcome-sec pt-5 pt-lg-6 pt-xl-7 pb-4 pb-lg-8 pb-xl-8"
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
                  <img src="images/contact-img.jpg" alt="Image" />
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
                className="contact-content"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="section-hd">
                  <h1 className="fc-100 fw-500">Get in touch</h1>
                </div>
                <ul>
                  <li>
                    <span className="icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </span>
                    2 County Court Blvd, <br /> Suite 400 Brampton,
                    <br /> Ontario, L6W 3W8
                  </li>
                  <li>
                    <span className="icon">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                    Phone: 905-230-3328
                  </li>
                  <li>
                    <span className="icon">
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                    Email:{' '}
                    <Link href="mailto:info@debtsolutionsgroup.ca">
                      info@debtsolutionsgroup.ca
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="map-sec">
        <div className="map-cover">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.269221249729!2d-79.7282233!3d43.6633704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15c7819e588d%3A0x4715e93ad204e202!2sDebt%20Solutions%20Group!5e0!3m2!1sen!2sca!4v1683202797940!5m2!1sen!2sca"
            allowFullScreen
          ></iframe>
        </div>
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
