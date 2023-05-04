import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Facebook, Instagram, Twitter, Whatsapp } from 'react-bootstrap-icons';
import ScrollToTopButton from './ScrollToTopButton';

export default function TalkToUs() {
  const router = useRouter();
  return (
    <>
      <section className="talk-sec" data-aos="fadeIn">
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div className="talk-us-cover">
                <figure>
                  <img src="images/talk-us.png" alt="Image" />
                </figure>
                <div className="talk-us-body">
                  <div className="talk-us-con">
                    <h3>Talk to Us</h3>
                    <h4>
                      Talk to us about the services we offer for Debt
                      Management, Consumer Proposals and Bankruptcy.
                    </h4>
                    <p>
                      There is a path that's right for you. Together, we will
                      find it.
                    </p>
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
