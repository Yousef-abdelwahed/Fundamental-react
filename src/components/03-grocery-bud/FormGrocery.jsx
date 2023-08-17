import { useState } from "react";
import { toast } from "react-toastify";

import { Container, Row, Form, Button, Col, InputGroup } from "react-bootstrap";
const FormGrocery = ({ addItems }) => {
  const [newItemName, setItemName] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide value");

      return;
    }
    addItems(newItemName);
    setItemName("");
  };
  return (
    <Container>
      <Form onSubmit={handleForm}>
        <Row>
          <InputGroup as={Col} md={12} className="flex-nowrap flex-row">
            <Form.Control
              type="text"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={newItemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Button type="submit">Add Item</Button>
          </InputGroup>
        </Row>
      </Form>
    </Container>
  );
};

export default FormGrocery;
