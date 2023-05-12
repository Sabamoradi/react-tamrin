import "./index.css";
import data from "./data";
import React, { useState } from "react";
const Lorem = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <div className="lorem-wrapper">
      <section className="lorem-section">
        <h3>Tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraphs:</label>
          <input
            type="number"
            name="amount"
            amount="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {text.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
        </article>
      </section>
    </div>
  );
};
export default Lorem;
