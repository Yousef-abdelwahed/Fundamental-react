import React from "react";
import SingleItems from "./SingleItems";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => (
        <SingleItems
          key={item.id}
          item={item}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};

export default Items;
