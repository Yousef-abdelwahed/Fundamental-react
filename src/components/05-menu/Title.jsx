import "./titleStyle.css";
const Title = ({ text }) => {
  return (
    <div className="text-center">
      <h4>{text}</h4>
      <div className="title-underline text-center"></div>
    </div>
  );
};

export default Title;
