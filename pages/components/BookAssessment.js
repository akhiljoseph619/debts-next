import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function BookAssessment() {
  return (
    <>
      <Container fluid="xxl">
        <Row>
          <Col xs="12" lg="6">
            <div
              className="book-form-cover"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="section-hd">
                <h2>
                  Book a Free <br />
                  <span>Assessment Session! </span>
                </h2>
              </div>
              <div className="book-form">
                <div className="form-group">
                  <div className="form-floating">
                    <input className="form-control" placeholder="Name" />
                    <label>Name</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      placeholder="Phone Number"
                    />
                    <label>Phone Number</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      placeholder="Email Address"
                    />
                    <label>Email Address</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-floating">
                    <select className="form-control">
                      <option>Choose your Nearest Location</option>
                      <option>Lorem ipsum</option>
                      <option>Lorem ipsum</option>
                      <option>Lorem ipsum</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                    <label>Message</label>
                  </div>
                </div>
                <button className="btn btn-shine btn-submit">Submit</button>
              </div>
            </div>
          </Col>
          <Col xs="12" lg="6">
            <div
              className="service-cover"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="section-hd">
                <h2>
                  Our <br />
                  <span>Debt relief Services</span>
                </h2>
              </div>
              <div className="service-list">
                <Link className="service-item" href="/consumer-proposal">
                  <figure>
                    <div className="img-shape">
                      <img src="images/d-shape.svg" alt="Shape" />
                    </div>
                    <i>
                      <img src="images/service-icon-01.png" alt="Service" />
                      <img
                        className="hover"
                        src="images/service-icon-wt-01.png"
                        alt="Service"
                      />
                    </i>
                  </figure>
                  <div className="service-body">
                    <h5>
                      Consumer <br />
                      Proposal
                    </h5>
                  </div>
                </Link>
                <Link className="service-item" href="/bankruptcy">
                  <figure>
                    <div className="img-shape">
                      <img src="images/d-shape.svg" alt="Shape" />
                    </div>
                    <i>
                      <img src="images/service-icon-02.png" alt="Service" />
                      <img
                        className="hover"
                        src="images/service-icon-wt-02.png"
                        alt="Service"
                      />
                    </i>
                  </figure>
                  <div className="service-body">
                    <h5>Bankruptcy</h5>
                  </div>
                </Link>
                <Link className="service-item" href="/debt-consolidation">
                  <figure>
                    <div className="img-shape">
                      <img src="images/d-shape.svg" alt="Shape" />
                    </div>
                    <i>
                      <img src="images/service-icon-03.png" alt="Service" />
                      <img
                        className="hover"
                        src="images/service-icon-wt-03.png"
                        alt="Service"
                      />
                    </i>
                  </figure>
                  <div className="service-body">
                    <h5>
                      Debt <br /> Consolidation
                    </h5>
                  </div>
                </Link>
                <Link className="service-item" href="/credit-counselling">
                  <figure>
                    <div className="img-shape">
                      <img src="images/d-shape.svg" alt="Shape" />
                    </div>
                    <i>
                      <img src="images/service-icon-04.png" alt="Service" />
                      <img
                        className="hover"
                        src="images/service-icon-wt-04.png"
                        alt="Service"
                      />
                    </i>
                  </figure>
                  <div className="service-body">
                    <h5>
                      Credit <br />
                      Counselling
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
