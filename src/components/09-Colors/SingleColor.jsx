import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import "./ColorStyle.css";
// eslint-disable-next-line react/prop-types
const SingleColor = ({ color, index }) => {
  // eslint-disable-next-line react/prop-types
  const { weight, hex } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`);
        console.log(hex);
        toast.success("color copied to clipboard");
      } catch {
        toast.error("Faild to copied Color clipboard");
      }
    } else {
      toast.error("clipboard access not available");
    }
  };
  return (
    <>
      <Col
        md={2}
        className={`color-list ${index > 10 ? "color-hex-max" : "color"}   `}
        style={{ background: `#${hex}` }}
        onClick={saveToClipboard}
      >
        <div className="mb-2">%{weight}</div>
        <div>#{hex}</div>
      </Col>
    </>
  );
};
SingleColor.propTypes = {
  children: PropTypes.node,
};
export default SingleColor;
