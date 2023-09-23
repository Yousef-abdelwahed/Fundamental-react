import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Tour.scss";
import { useState } from "react";
const TourCards = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <Col xl={4} lg={4} md={6} sm={12} className="my-4  ">
      <Card style={{ minWidth: "100%" }}>
        <div className="position-relative bg-image  card-image ">
          <Card.Img variant="top" src={image} className="w-100 h-auto" />
          <span className="position-absolute price bg-success p-2  text-white  ">
            ${price}
          </span>
        </div>
        <Card.Body className="position-relative">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-start">
            {readMore ? info.substring(0, 180) : info}{" "}
            <span
              onClick={() => setReadMore(!readMore)}
              className="text-success fw-bold d-inline-block p-2 mb-4"
            >
              ...{readMore ? "Show More" : "Show Less"}
            </span>
          </Card.Text>
          <Button
            variant="success"
            className="btn-block  btn-hipster btn text-white mt-5 position-absolute end-0 start-0 bottom-0 "
            onClick={() => removeTour(id)}
          >
            Not Interesting
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TourCards;
