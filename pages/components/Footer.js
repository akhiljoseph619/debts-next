import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Facebook, Instagram, Twitter, Whatsapp } from 'react-bootstrap-icons';
import ScrollToTopButton from './ScrollToTopButton';

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <footer className="footer-sec pt-4 pt-lg-6 pt-xl-7 pb-4 pb-lg-6 pb-xl-7">
        <Container fluid="xxl">
          <Row className="g-xxl-5">
            <Col xs="12" md="6" lg="4" xl="3">
              <div className="ft-contact-cover">
                <div className="ft-logo">
                  <Link href="">
                    <img
                      src="images/debt-logo-footer.png"
                      alt="Debt Solutions"
                    />
                  </Link>
                </div>
                <div className="ft-address">
                  <ul className="ft-con-list">
                    <li>
                      <Link href="tel:9052303328">905-230-3328</Link>
                    </li>
                    <li>
                      <Link href="mailto:info@debtsolutionsgroup.ca">
                      info@debtsolutionsgroup.ca
                      </Link>
                    </li>
                    <li>Monday - Saturday: 10:00 AM to 6 PM</li>
                  </ul>
                </div>
                <ul className="social-list">
                  <li className="soc-item">
                    <Link
                      type="button"
                      className="soc-link"
                      data-toggle="tooltip"
                      href="#"
                      title="Facebook"
                    >
                      <Facebook />
                    </Link>
                  </li>
                  <li className="soc-item">
                    <Link
                      type="button"
                      className="soc-link"
                      data-toggle="tooltip"
                      href="#"
                      title="Instagram"
                    >
                      <Instagram />
                    </Link>
                  </li>
                  <li className="soc-item">
                    <Link
                      type="button"
                      className="soc-link"
                      data-toggle="tooltip"
                      href="#"
                      title="Twitter"
                    >
                      <Twitter />
                    </Link>
                  </li>
                  <li className="soc-item">
                    <Link
                      type="button"
                      className="soc-link"
                      data-toggle="tooltip"
                      href="#"
                      title="Whatsapp"
                    >
                      <Whatsapp />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs="12" md="6" lg="4" xl="3">
              <div className="ft-book-cover">
                <h3>We know this is stressful, but you're not alone.</h3>
                <p>
                  It's going to be okay. Book your free consultation today.
                  We'll do the rest.
                </p>
                <Link className="btn btn-shine btn-book" href="/contact-us">
                  Book Now
                </Link>
              </div>
            </Col>
            <Col xs="12" md="6" lg="4" xl="3">
              <div className="ft-links-cover">
                <h3>Our Services</h3>
                <ul className="ft-links">
                  <li className="ft-item">
                    <Link className="ft-nav" href="/consumer-proposal">
                      Consumer Proposal
                    </Link>
                  </li>
                  <li className="ft-item">
                    <Link className="ft-nav" href="/bankruptcy">
                      Bankruptcy
                    </Link>
                  </li>
                  <li className="ft-item">
                    <Link className="ft-nav" href="javascript:">
                      Debt Consolidation
                    </Link>
                  </li>
                  <li className="ft-item">
                    <Link className="ft-nav" href="javascript:">
                      Credit Counselling
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs="12" md="6" lg="4" xl="3">
              <div className="ft-links-cover">
                <h3>Quick Links</h3>
                <ul className="ft-links">
                  <li className="ft-item">
                    <Link className="ft-nav" href="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li className="ft-item">
                    <Link className="ft-nav" href="">
                      Free Assessment
                    </Link>
                  </li>
                  <li className="ft-item">
                    <Link className="ft-nav" href="">
                      Our Blog
                    </Link>
                  </li>
                  <li className="ft-item">
                    <Link className="ft-nav" href="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="copyright-cover">
            <Row>
              <Col xs="12" lg="6">
                <div className="copyright">
                  &copy; Copyright 2020-2023 | debsolutionsgroup.ca, All Rights
                  are Reserved.
                </div>
              </Col>
              <Col xs="12" lg="6">
                <ul className="btm-list">
                  <li className="btm-item">
                    <Link className="btm-link" href="/terms-conditions">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="btm-item">
                    <Link className="btm-link" href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>

      <div className="offer-sticky">
        <img src="images/offer.png" alt="DebtSolutions" />
      </div>

      <ScrollToTopButton />
    </>
  );
}
