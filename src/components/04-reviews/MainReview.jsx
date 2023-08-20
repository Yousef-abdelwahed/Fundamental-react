import { useState } from "react";
import reviews from "./dataReview";

import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

//
import "./reviewStyle.css";
import { Button, Col, Container, Row } from "react-bootstrap";
//
const MainReview = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const randomValue = () => {
    let randomNum = Math.floor(Math.random() * reviews.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum));
  };
  //
  // const checkNumber = (number) => {
  //   if (number > reviews.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return reviews.length - 1;
  //   }
  //   console.log(number);
  //   return number;
  // };
  const handleNext = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % reviews.length;
      return newIndex;
    });
  };
  const handlePrev = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1 + (reviews.length % reviews.length);
      return checkNumber(newIndex);
    });
  };

  return (
    <section className="m-auto">
      <article className="review">
        <Container>
          <Row className="flex-row">
            <Col sm={12}>
              <div className="img-container">
                <img
                  src={image}
                  alt={name}
                  className="person-img"
                  style={{ width: "100%" }}
                />
                <span className="quote-icon">
                  <FaQuoteRight />{" "}
                </span>
              </div>
            </Col>
            <Col className="text-center">
              <div className="text-dark">
                <h4 className="author ">{name}</h4>
                <h6 className="job">{job}</h6>
              </div>
              <div className="text-muted">
                <span className="info ">{text}</span>
              </div>
            </Col>
            <Col sm={12} className="text-center">
              <div className="icon-container my-2 text-dark">
                <span className="prev-btn" onClick={handlePrev}>
                  <FaChevronLeft />
                </span>
                <span className="next-btn" onClick={handleNext}>
                  <FaChevronRight />
                </span>
              </div>
              <div className="btn-container">
                <Button variant="success" onClick={randomValue}>
                  Surprise Me
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </article>
    </section>
  );
};
// MainReview.propTypes = {
//   children: MainReview.node,
// };
export default MainReview;
