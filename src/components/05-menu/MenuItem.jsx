import { useState } from "react";
import { Button, Col } from "react-bootstrap";

const MenuItem = ({ title, price, img, desc }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Col md={4}>
        <article className="menu-item my-4">
          <img style={{ width: "100%" }} src={img} alt={title} />
          <div className="info-item p-1 mt-2 mb-1 ">
            <header className="d-flex justify-content-between ">
              <h6 className="title-item">{title}</h6>
              <span className="price-item mb-2">{price}</span>
            </header>
          </div>
          <p className="category-item text-muted">
            {readMore ? desc : ` ${desc.substring(0, 50)}....`}
            <span className="text-dark" onClick={() => setReadMore(!readMore)}>
              {readMore ? "...show less" : "read more"}
            </span>
          </p>
        </article>
      </Col>
    </>
  );
};

export default MenuItem;
