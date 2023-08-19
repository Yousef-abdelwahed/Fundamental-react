import { useState } from "react";

import FormGrocery from "./FormGrocery";
import "./groceryStyle.css";
import Items from "./Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

//localStorage
const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

// compoenet
const MainGroceryComponent = () => {
  const [items, setItems] = useState(defaultList);

  // add item
  const addItems = (item) => {
    const newItem = { id: nanoid(), name: item, completed: false };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added successfully");
  };
  //*** remove */
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.error("item removed");
  };
  //*********Edit */
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <>
      <ToastContainer position={"top-right"} />
      <section className="section-center">
        <FormGrocery addItems={addItems} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </>
  );
};

export default MainGroceryComponent;
