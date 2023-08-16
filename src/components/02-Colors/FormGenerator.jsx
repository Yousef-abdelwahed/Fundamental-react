import { Form, Row, Container, Button } from "react-bootstrap";
import "./ColorList";
import { useState } from "react";
import PropTypes from "prop-types";

//
// eslint-disable-next-line react/prop-types
const FormGenerator = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <>
      <Container className="">
        <h4 className="my-3">color generator</h4>

        <Form onSubmit={handleForm}>
          <Row className="w-50 align-items-center flex-nowrap">
            {/* <Form.Label>Color Generator </Form.Label> */}
            <Form.Control
              type="color"
              id="ColorInput"
              // defaultValue="#563d7c"
              title="Choose your color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <Form.Control
              type="text"
              value={color}
              // defaultValue="#f15025"
              placeholder="#000000"
              onChange={(e) => setColor(e.target.value)}
            />
            <Button type="submit" className="submit-btn">
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
};
FormGenerator.propTypes = {
  children: PropTypes.node,
};
export default FormGenerator;
