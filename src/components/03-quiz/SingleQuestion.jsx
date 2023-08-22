import Accordion from "react-bootstrap/Accordion";

const SingleQuestion = ({ question, index }) => {
  const { title, info } = question;
  return (
    <>
      <Accordion.Item eventKey={index}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{info}</Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default SingleQuestion;
