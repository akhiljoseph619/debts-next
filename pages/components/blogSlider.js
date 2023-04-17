import React from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const blogResponsive = {
  0: {
    items: 1,
  },
  576: {
    items: 2,
  },
  992: {
    items: 3,
  },
  1200: {
    items: 3,
  },
};

export default function BlogSlider() {
  return (
    <div
      className="blog-carousel"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <OwlCarousel
        className="owl-theme"
        nav={true}
        dots={true}
        navText={false}
        margin={15}
        responsive={blogResponsive}
      >
        <div className="item">
          <div className="blog-item">
            <figure>
              <img src="images/blog-thumb-01.jpg" alt="Blog" />
            </figure>
            <div className="blog-body">
              <div className="blog-content">
                <div className="blog-date">
                  <span>Blog</span> : January 2023
                </div>
                <h3>What to do if your mortgage is late on payments</h3>
                <p>
                  Many Canadians continue to struggle to make mortgage payments
                  since the COVID-19 epidemic and the financial strain it caused
                  is not close to being...
                </p>
              </div>
              <a className="btn btn-more" href="javascript:;">
                <span className="nav-label">Read More</span>
                <span className="nav-arrow">
                  <i className="bi bi-arrow-right-short"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="blog-item">
            <figure>
              <img src="images/blog-thumb-02.jpg" alt="Blog" />
            </figure>
            <div className="blog-body">
              <div className="blog-content">
                <div className="blog-date">
                  <span>Blog</span> : January 2023
                </div>
                <h3>
                  How long will information stay on an equifax credit report?
                </h3>
                <p>
                  Many Canadians continue to struggle to make mortgage payments
                  since the COVID-19 epidemic and the financial strain it caused
                  is not close to being...
                </p>
              </div>
              <a className="btn btn-more" href="javascript:;">
                <span className="nav-label">Read More</span>
                <span className="nav-arrow">
                  <i className="bi bi-arrow-right-short"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="blog-item">
            <figure>
              <img src="images/blog-thumb-03.jpg" alt="Blog" />
            </figure>
            <div className="blog-body">
              <div className="blog-content">
                <div className="blog-date">
                  <span>Blog</span> : January 2023
                </div>
                <h3>Has your consumer proposal been rejected?</h3>
                <p>
                  Many Canadians continue to struggle to make mortgage payments
                  since the COVID-19 epidemic and the financial strain it caused
                  is not close to being...
                </p>
              </div>
              <a className="btn btn-more" href="javascript:;">
                <span className="nav-label">Read More</span>
                <span className="nav-arrow">
                  <i className="bi bi-arrow-right-short"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
