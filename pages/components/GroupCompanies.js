import React from "react";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const comResponsive = {
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
    slideBy: 3,
  },
  992: {
    items: 4,
    slideBy: 4,
  },
  1200: {
    items: 6,
    slideBy: 6,
  },
};

export default function WhatWeSlider() {
  return (
    <section className="group-sec">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <div className="groups-carousel">
              <OwlCarousel
                className="owl-theme"
                nav={true}
                dots={false}
                navText={false}
                responsive={comResponsive}
              >
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="https://mamun.om/" target="_blank">
                        <img src="images/groups-logo-001.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="http://www.rihal.om/" target="_blank">
                        <img src="images/groups-logo-03.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="http://wecom.om/" target="_blank">
                        <img src="images/groups-logo-04.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="https://www.cloudacropolis.com/" target="_blank">
                        <img src="images/groups-logo-05.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="http://hemt-int.com/" target="_blank">
                        <img src="images/groups-logo-02.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="https://oliban.om/" target="_blank">
                        <img src="images/groups-logo-06.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="https://ntg.om/" target="_blank">
                        <img src="images/groups-logo-09.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="#">
                        <img src="images/groups-logo-10.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="#">
                        <img src="images/groups-logo-11.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="https://www.osos.om/" target="_blank">
                        {" "}
                        <img src="images/groups-logo-13.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <img src="images/groups-logo-07.jpg" alt="Brand" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="groups-item">
                    <div className="groups-bdr">
                      <a href="https://esnad-int.com/" target="_blank">
                        <img src="images/groups-logo-08.jpg" alt="Brand" />
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
