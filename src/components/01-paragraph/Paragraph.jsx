import { Row, Container, Col, FormGroup, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

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
    <main>
      <section>
        <Container>
          <h2 className="text-center mt-3">paragraph generator</h2>
          <Form onSubmit={handleForm}>
            <Row className="mt-5">
              <FormGroup as={Col} className="text-end ">
                <Form.Label className="lh-base fw-bold fs-4">
                  Paragraph
                </Form.Label>
              </FormGroup>
              <FormGroup as={Col} md={1}>
                <Form.Control
                  type="number"
                  name="amount"
                  id="amount"
                  min="1"
                  step="1"
                  max="8"
                  className="fw-bold fs-5"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
              </FormGroup>
              <FormGroup as={Col}>
                <Button type="submit">Generate</Button>
              </FormGroup>
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
    </main>
  );
};

export default Paragraph;
