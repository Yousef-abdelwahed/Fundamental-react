import { Row, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./paragraphStyle.css";
import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const Paragraph = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleForm = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <section>
      <Container>
        <Form onSubmit={handleForm}>
          <Row className="mt-5">
            <label className="lh-base fw-bold my-2  ">Paragraph</label>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <Form.Control
                  type="number"
                  name="amount"
                  id="amount"
                  min="1"
                  step="1"
                  max="8"
                  className="fw-bold fs-5 w-100"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  style={{ width: "50rem" }}
                />
              </InputGroup.Text>

              <Button type="submit" className="">
                Generate
              </Button>
            </InputGroup>
            <article className="text-center ">
              {text.map((el) => {
                return (
                  <p key={nanoid()} className="mt-3 fs-5 lh-base w-75 m-auto">
                    {el}
                  </p>
                );
              })}
            </article>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default Paragraph;
