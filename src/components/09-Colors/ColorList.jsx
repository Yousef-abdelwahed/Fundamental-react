import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

//
// eslint-disable-next-line react/prop-types
const ColorList = ({ colorList }) => {
  //   console.log(colorList);
  return (
    <article className="mt-5">
      <Container>
        <Row>
          {/* // eslint-disable-next-line react/prop-types, react/prop-types,react/prop-types, react/prop-types */}
          {colorList.map((color, index) => (
            <SingleColor key={nanoid()} color={color} index={index} />
          ))}
        </Row>
      </Container>
    </article>
  );
};
ColorList.propTypes = {
  children: PropTypes.node,
};
export default ColorList;
