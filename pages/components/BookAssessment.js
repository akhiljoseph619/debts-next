import Link from "next/link";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { Container, Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';

export default function BookAssessment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const recaptchaRef = useRef(null);
  const formRef = useRef();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    try {
      setIsSubmitting(true);
      setResponseMessage(false);
      let data = getValues();
      data.recaptcha = recaptchaRef?.current?.getValue();
      if (data.recaptcha) {
        let response = await fetch("api/contact", {
          method: "POST", // or 'PUT'
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          reset();
          router.push('/ThankYou');
        } else {
          let result = await response.json();
          setResponseMessage(result.error);
        }
        recaptchaRef.current.reset();
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        console.log("executing");
        setResponseMessage("Captcha Field is Required.");
        recaptchaRef.current.execute();
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setResponseMessage("Error!!!");
      recaptchaRef.current.reset();
    }
  };

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
              <form
                reference={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="assessmentForm"
              >
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={onReCAPTCHAChange}
                />
                <div className="book-form">
                  <div className="form-group">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Name"
                        {...register("name", { required: true })}
                      />
                      <label>Name</label>
                    </div>
                    {errors.name && errors.name.type === "required" && (
                      <span className="error">This field is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Phone Number"
                        {...register("phone", { required: true })}
                        type="tel"
                      />
                      <label>Phone Number</label>
                    </div>
                    {errors.phone && errors.phone.type === "required" && (
                      <span className="error">This field is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Email Address"
                        {...register("email", {
                          required: "required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message:
                              "Entered value does not match email format",
                          },
                        })}
                        type="email"
                      />
                      <label>Email Address</label>
                    </div>
                    {errors.phone && errors.email.type === "required" && (
                      <span className="error">This field is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Message"
                        {...register("message", { required: true })}
                      ></textarea>
                      <label>Message</label>
                    </div>
                    {errors.message && errors.message.type === "required" && (
                      <span className="error">This field is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <button className="btn btn-shine btn-submit">
                      {isSubmitting ? (
                        <div className="button-loader" id="loader-4">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                    {responseMessage ? (
                      <span className="error">{responseMessage}</span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </form>
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
                <Link className="service-item" href="javascript:">
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
                <Link className="service-item" href="javascript:">
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
