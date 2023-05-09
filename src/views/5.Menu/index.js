import { useState } from "react";
import items from "./data";
import "./index.css";
import MenuBtn from "../../components/MenuBtn";
import MenuItem from "../../components/MenuItem";
const allCategories = ["all", ...new Set(items.map(el => el.category))];
const Menu = () => {
  const [data, setData] = useState(items);
  const [categories, setAllCategories] = useState(allCategories);
  const filterItem = el => {
    if (el === "all") {
      setData(items);
    } else {
      const newData = items.filter(itemsData => itemsData.category === el);
      setData(newData);
    }
  };
  return (
    <main className="menu-main">
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline" />
        </div>
        <MenuBtn categories={categories} filterItem={filterItem} />
        <MenuItem menuData={data} />
      </section>
    </main>
  );
};
export default Menu;
