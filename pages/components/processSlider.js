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

const proResponsive = {
  0: {
    items: 2,
    slideBy: 2,
  },
  480: {
    items: 2,
    slideBy: 2,
  },
  768: {
    items: 3,
  },
  992: {
    items: 4,
  },
};

export default function SliderProcess() {
  return (
    <div
      className="process-carousel"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <OwlCarousel
        className="owl-theme"
        nav={true}
        dots={true}
        navText={false}
        responsive={proResponsive}
      >
        <div className="item">
          <div className="process-item">
            <div className="counter">1</div>
            <figure>
              <img src="images/process-img-01.jpg" alt="Process" />
            </figure>
            <div className="process-body">
              <p>Book your free consultation (phone, video or in-person).</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="process-item">
            <div className="counter">2</div>
            <figure>
              <img src="images/process-img-02.jpg" alt="Process" />
            </figure>
            <div className="process-body">
              <p>We will discuss the best debt-relief options for you.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="process-item">
            <div className="counter">3</div>
            <figure>
              <img src="images/process-img-03.jpg" alt="Process" />
            </figure>
            <div className="process-body">
              <p>We look after all the paperwork and manage all the details.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="process-item">
            <div className="counter">4</div>
            <figure>
              <img src="images/process-img-04.jpg" alt="Process" />
            </figure>
            <div className="process-body">
              <p>Start living your best life debt-free, with confidence.</p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
