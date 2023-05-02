import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function BlogDetails() {
  return (
    <>
      <section className="ins-banner-sec">
        <div className="ins-banner-cover">
          <div className="ins-banner-body">
            <Container fluid="xxl">
              <div className="ins-banner-hd">
                <h1>
                  <span className="first-word">Blog</span>
                </h1>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section className="blog-sec pt-5 pt-xl-6 pb-4 pb-xl-5">
        <Container fluid="xxl">
          <Row className="gx-xl-5">
            <Col xs="12" lg="8">
              <div className="blog-dt-cover">
                <figure>
                  <img src="images/blog-item-thumb-01.jpg" alt="Image" />
                </figure>
                <div className="blog-dt-body">
                  <div className="blog-date">
                    <span>Blog</span>: Muscat, May 25th, 2022
                  </div>
                  <div className="blog-dt-hd">
                    <h3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste dolore earum, provident amet rerum sit minus quos
                    pariatur, atque mollitia culpa, magnam totam deleniti!
                    Assumenda, a consequatur vitae cupiditate nobis totam
                    possimus itaque facere obcaecati voluptates numquam fuga
                    amet quisquam nostrum quasi deserunt repellat quam quia
                    repellendus, reprehenderit necessitatibus quo. Voluptatibus
                    eligendi, fugit sapiente dolorem tenetur saepe suscipit
                    exercitationem, itaque unde eos eius consequatur quis
                    explicabo aut doloremque nulla nam corrupti ullam quae
                    reiciendis? Id repellendus quo ad deleniti dolore reiciendis
                    consequuntur itaque. Non ex perspiciatis eligendi velit
                    nostrum iure atque illum id esse dolorum! Debitis reiciendis
                    minima praesentium repellat!
                  </p>
                  <p>
                    Voluptatibus eligendi, fugit sapiente dolorem tenetur saepe
                    suscipit exercitationem, itaque unde eos eius consequatur
                    quis explicabo aut doloremque nulla nam corrupti ullam quae
                    reiciendis? Id repellendus quo ad deleniti dolore reiciendis
                    consequuntur itaque. Non ex perspiciatis eligendi velit
                    nostrum iure atque illum id esse dolorum! Debitis reiciendis
                    minima praesentium repellat!
                  </p>
                </div>
              </div>
            </Col>
            <Col xs="12" lg="4">
              <div className="input-group blog-search-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <button className="btn btn-blog" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
              <div
                className="blog-list-cover"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                <div className="blog-sm-item">
                  <figure>
                    <img src="images/blog-thumb-sm-01.jpg" alt="Image" />
                  </figure>
                  <div className="blog-sm-body">
                    <div className="blog-date">
                      <span className="blog-place">Muscat,</span> Jan 15, 2023
                    </div>
                    <h4>19th April 2022 : Iftar reception</h4>
                  </div>
                </div>
                <div className="blog-sm-item">
                  <figure>
                    <img src="images/blog-thumb-sm-02.jpg" alt="Image" />
                  </figure>
                  <div className="blog-sm-body">
                    <div className="blog-date">
                      <span className="blog-place">Muscat,</span> Jan 15, 2023
                    </div>
                    <h4>
                      French envoy hosts International Women's Day celebration
                    </h4>
                  </div>
                </div>
                <div className="blog-sm-item">
                  <figure>
                    <img src="images/blog-thumb-sm-03.jpg" alt="Image" />
                  </figure>
                  <div className="blog-sm-body">
                    <div className="blog-date">
                      <span className="blog-place">Muscat,</span> Jan 15, 2023
                    </div>
                    <h4>OFA discusses challenges faced by Omani women</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
