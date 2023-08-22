import { Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import SingleQuestion from "./SingleQuestion";
import { nanoid } from "nanoid";
//
const Questions = ({ questions }) => {
  return (
    <>
      <Container>
        <Row className="mb-4">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            {questions.map((question, index) => (
              <SingleQuestion
                key={nanoid()}
                question={question}
                index={index}
              />
            ))}
          </Accordion>
        </Row>
      </Container>
    </>
  );
};

export default Questions;
