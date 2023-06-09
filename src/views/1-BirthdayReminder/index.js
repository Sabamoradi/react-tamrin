import { useState } from "react";
import List from "../../components/List/index";
import data from "./data";
import "./index.css";
import BaseButton from "../../components/Button/index";
import { Link } from 'react-router-dom';
const BirthdayReminder = () => {
  const [item, SetItem] = useState(data);
  const clickBtn = () => {
    SetItem([])
  };
  return (
    <main className="main-birthday">
      <section className="container">
        <h3>
          {item.length} Birthday today
        </h3>
        
        <List data={item} />
        <BaseButton clickBtn={clickBtn} btnColor="#673ab7" color="#fff" title="clear All" />
      </section>
    </main>
  );
};
export default BirthdayReminder;
