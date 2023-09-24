import { useState } from "react";
import menu from "./dataMenu";
import { Container } from "@mui/material";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categoris";

let allCategories = ["All", ...new Set(menu.map((item) => item.category))];
const MenuMain = () => {
  const [menusData, setMenuData] = useState(menu);
  const [categoriesItems, setCategoryItems] = useState(allCategories);
  const filleterItem = (choseCategory) => {
    if (choseCategory === "All") {
      return setMenuData(menu);
    }
    const newCatego = menu.filter((item) => item.category === choseCategory);
    setMenuData(newCatego);
  };
  return (
    <section className="menu-section text-dark">
      <Title text="our menu" />
      <Container>
        <Categories categories={categoriesItems} filleterItem={filleterItem} />

        <Menu items={menusData} />
      </Container>
    </section>
  );
};

export default MenuMain;
