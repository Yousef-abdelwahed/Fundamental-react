import { Container, Row } from "react-bootstrap";
import TourCards from "./TourCards";

const Tour = ({ tours, removeTour }) => {
  return (
    <section className="text-center">
      <Container className="">
        <Row className="flex-row ">
          <div className="title">
            <h2>our tours</h2>
            <div className="title-underline"></div>
          </div>
          {tours.map((tour) => (
            <TourCards {...tour} key={tour.id} removeTour={removeTour} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Tour;
