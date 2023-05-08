import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import BookAssessment from './components/BookAssessment';

export default function ConsumerProposal() {
  return (
    <>
      <section className="ins-banner-sec">
        <div className="ins-banner-cover">
          <div className="ins-banner-body">
            <Container fluid="xxl">
              <div className="ins-banner-hd">
                <h1>
                  <span className="first-word">Terms & Conditions</span>
                </h1>
                <h4>Forgives up to 90 percent of your liability</h4>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section
        className="page-intro-sec pt-5 pt-xl-6 pb-4 pb-xl-5"
        data-aos="fadeIn"
      >
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div className="terms-cover">
                <div className="terms-item">
                  <p>
                    These terms and conditions (the “Terms and Conditions”)
                    govern the use of atriaaccounting.ca (the “Site”). This Site
                    is owned and operated by Atria Accounting Professional
                    Corporation. The Site provides information about Atria
                    Accounting's professional services and other relevant
                    information related to the business.
                  </p>
                  <p>
                    By using this Site, you indicate that you have read and
                    understand these Terms and Conditions and agree to abide by
                    them at all times.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Intellectual Property</h4>
                  </div>
                  <p>
                    All content published and made available on our Site is the
                    property of Atria Accounting Professional Corporation and
                    the Site's creators. This includes, but is not limited to,
                    images, text, logos, documents, downloadable files and
                    anything that contributes to the composition of our site.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Limitation of Liability</h4>
                  </div>
                  <p>
                    Atria Accounting Professional Corporation and our directors,
                    officers, agents, employees, subsidiaries, and affiliates
                    will not be liable for any actions, claims, losses, damages,
                    liabilities, and expenses including legal fees for your use
                    of the Site.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Indemnity</h4>
                  </div>
                  <p>
                    Except where prohibited by law, by using this Site, you
                    indemnify and hold harmless Atria Accounting Professional
                    Corporation and our directors, officers, agents, employees,
                    subsidiaries and affiliations from any actions, claims,
                    losses, damages, liabilities, and expenses including legal
                    fees arising our of your use of our Site or your violation
                    of these Terms and Conditions.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Applicable Law</h4>
                  </div>
                  <p>
                    These Terms and Conditions are governed by the laws of
                    Canada and the Province of Ontario.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Severability</h4>
                  </div>
                  <p>
                    If at any time of the provisions set forth in these Terms
                    and Conditions are found to be inconsistent or invalid under
                    applicable laws, those provisions will be deemed void and
                    will be removed from these Terms and Conditions. All other
                    provisions will not be affected by the removal and the rest
                    of Terms and Conditions will still be considered valid.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Changes</h4>
                  </div>
                  <p>
                    These Terms and Conditions may be amended from time to time
                    in order to maintain compliance with the law and to reflect
                    any changes to the way we operate our Site and the way we
                    expect users to behave on our Site. We will notify users of
                    changes to these Terms and Conditions by a posting a notice
                    on our Site.
                  </p>
                </div>
                <div className="terms-item">
                  <div className="terms-hd">
                    <h4>Contact Details</h4>
                  </div>
                  <p>
                    Please contact us if you have any questions or concerns at{' '}
                    <Link href="mailto:info@debtsolutionsgroup.ca">
                      info@debtsolutionsgroup.ca
                    </Link>
                    .
                  </p>
                  <p>
                    You may also contact us through the feedback form available
                    on our Site.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
