import { nanoid } from "nanoid";
import { Button } from "react-bootstrap";
import "./titleStyle.css";
const Categories = ({ categories, filleterItem }) => {
  return (
    <div className="my-4">
      {categories.map((item) => (
        <Button
          key={nanoid()}
          className="mx-2 btn-catego"
          onClick={() => filleterItem(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
