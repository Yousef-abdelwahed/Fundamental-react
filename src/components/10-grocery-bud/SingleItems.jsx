import { Container, Row, Form, Button, Col } from "react-bootstrap";
import "./groceryStyle.css";
import { useState } from "react";
const SingleItems = ({ item, removeItem, editItem }) => {
  const { name, id, completed } = item;
  //   const ids = (x) => {
  //     console.log(x);
  //   };
  console.log(completed);
  return (
    <Container className="single-item ">
      <div className="item  d-flex flex-row bd-highlight mb-3 justify-content-around align-items-center mt-4 ">
        <Form.Check
          type="checkbox"
          checked={completed}
          onChange={() => editItem(id)}
        />
        <p
          className="item-name"
          style={{ textDecoration: completed && "line-through" }}
        >
          {name}
        </p>
        <Button variant="dark" onClick={() => removeItem(id)}>
          Delete
        </Button>
      </div>
    </Container>
  );
};

export default SingleItems;
