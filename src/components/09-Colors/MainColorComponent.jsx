import { useState } from "react";
import FormGenerator from "./FormGenerator";
import ColorList from "./ColorList";
import Values from "values.js";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

const MainColorComponent = () => {
  const [colorList, setColorList] = useState(new Values("#307a2e").all(5));
  //   console.log(colorList);
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(5);
      setColorList(newColor);
      toast.success("awesome");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <section className="m-auto">
        <FormGenerator addColor={addColor} />
        <ColorList colorList={colorList} />
        <ToastContainer position="top-left" />
      </section>
    </>
  );
};
MainColorComponent.propTypes = {
  children: PropTypes.node,
};
export default MainColorComponent;
