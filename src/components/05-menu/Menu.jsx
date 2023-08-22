import React from "react";
import MenuItem from "./MenuItem";
import { nanoid } from "nanoid";
import { Row } from "react-bootstrap";

const Menu = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <MenuItem {...item} key={nanoid()} />
      ))}
    </Row>
  );
};

export default Menu;
