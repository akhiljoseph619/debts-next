import Link from "next/link";

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import SliderProcess from "./components/processSlider";
import BlogSlider from "./components/blogSlider";
import BookAssessment from "./components/BookAssessment";
import { useRouter } from "next/router";
import "aos/dist/aos.css";

export default function Home() {
  const router = useRouter();

  // Bootstra carousel hover pause
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // AOS animation
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);
  return (
    <>
      <section className="banner-sec">
        <div className="banner-cover">
          <Carousel
            pause={!isHovering}
            fade
            controls={false}
            indicators={false}
          >
            <Carousel.Item>
              <img
                className="slider-web"
                src="images/slider-01.jpg"
                alt="Banner"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slider-web"
                src="images/slider-02.jpg"
                alt="Banner"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slider-web"
                src="images/slider-03.jpg"
                alt="Banner"
              />
            </Carousel.Item>
          </Carousel>
          <div className="banner-body">
            <div className="container-xxl">
              <div className="banner-content">
                <h2>
                  <span className="first-word">Take</span> control of your
                  finances and get debt relief.
                </h2>
                <h4>If you're drowning in debt, we can help you.</h4>
                <div className="banner-nav">
                  <Link className="btn btn-shine btn-book" href="/contact-us">
                    BOOK A FREE ASSEssMENT
                    <span className="btn-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="arrow-down">
            <i className="bi bi-arrow-down-short"></i>
          </div>
        </div>
      </section>

      <section
        className="welcome-sec pt-5 pt-lg-6 pb-4 pb-lg-5"
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
                  <img src="images/welcome-site-img.jpg" alt="Image" />
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
                    Whatever your situation, there is a{" "}
                    <span>debt-relief option for you.</span>
                  </h1>
                </div>
                <h4>
                  Debtsolutions Group is a debt solutions company based in
                  Canada that specializes in debt management and debt relief
                  services.
                </h4>
                <p>
                  They offer a range of debt solutions such as debt
                  consolidation loans, debt settlement programs, debt management
                  plans, and bankruptcy assistance to help individuals and
                  businesses struggling with debt. Debsolutions Group aims to
                  help their clients become debt-free as quickly and efficiently
                  as possible.
                </p>
                <Link className="btn btn-shine btn-book" href="/about-us">
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="process-sec pt-4 pt-xl-5 pb-4 pb-xl-5"
        data-aos="fadeIn"
      >
        <div className="pro-bg-graphics">
          <div className="particle-item part-item-01">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 32 32"
              className="particle-svg"
            >
              <circle cx={16} cy={16} r={13.1} />
            </svg>
          </div>
          <div className="particle-item part-item-02">
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
        <Container fluid="xxl">
          <Row>
            <div className="col-12">
              <div
                className="section-hd process-hd"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h2>
                  Four Steps <span>to Living Debt Free</span>
                </h2>
              </div>
            </div>
          </Row>
          <Row>
            <Col xs="12">
              <SliderProcess />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="support-sec pt-4 pt-xl-5" data-aos="fadeIn">
        <Container fluid="xxl">
          <Row>
            <Col xs="12" lg="6">
              <div
                className="support-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="section-hd">
                  <h2>
                    We're <span>here to Help you</span>
                  </h2>
                </div>
                <h4>
                  Stop interest, collection calls, and garnishments, all while
                  reducing and consolidating your debt through a consumer
                  proposal or bankruptcy.
                </h4>
                <p>
                  We know how to help you regain control of your debt and life
                  and reduce financial stress.
                </p>
                <a className="btn btn-shine btn-book" href="#bookAssessment">
                  BOOK A FREE ASSEssMENT
                </a>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div
                className="support-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <img src="images/support-img.png" alt="Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="bookAssessment"
        className="book-sec pt-4 pt-lg-5 pt-xl-6"
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

      <section className="blog-sec pt-4 pt-lg-5 pt-xl-6 pb-4 pb-lg-5 pb-xl-6">
        <div className="blog-bg-graphics">
          <div className="particle-item part-item-01">
            <img src="images/dots.svg" alt="Service" />
          </div>
        </div>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div
                className="section-hd blog-hd"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h2>
                  Latest <span>Blogs</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <BlogSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
