import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";

export default function navbarMain() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100 ? setStickyClass("navbar-fixed") : setStickyClass("");
    }
  };

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Navbar className={`navbar-main ${stickyClass}`} bg="light" expand="lg">
      <Container fluid="xxl">
        <div className="logo">
          <Link href="/">
            <img src="images/debt-logo.png" alt="DEBT SOLUTIONS GROUP" />
          </Link>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            stroke="var(--white)"
            fill="none"
            className="hamburger"
            viewBox="-10 -10 120 120"
          >
            <path
              className="line"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            ></path>
          </svg>
        </button> */}

        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav info-nav">
            <li className="nav-item">
              <Link className="nav-link" href="tel:+650-1100">
                <span className="nav-icon">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                905-230-3328
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="mailto:info@debtsolutionsgroup.ca"
              >
                <span className="nav-icon">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                info@debtsolutionsgroup.ca
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav main-nav">
            <li className="nav-item">
              <Link
                href="/"
                className={
                  router.pathname == "/" ? "active nav-link" : "nav-link"
                }
              >
                <span className="nav-block">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about-us"
                className={
                  router.pathname == "/about-us"
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                <span className="nav-block">About Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/debit-relief-services"
                className={
                  router.pathname == "/debit-relief-services"
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                <span className="nav-block">Debt Relief Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/consumer-proposal"
                className={
                  router.pathname == "/consumer-proposal"
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                <span className="nav-block">Consumer Proposal</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/bankruptcy"
                className={
                  router.pathname == "/bankruptcy"
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                <span className="nav-block">Bankruptcy</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact-us"
                className={
                  router.pathname == "/contact-us"
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                <span className="nav-block">Contact Us</span>
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
