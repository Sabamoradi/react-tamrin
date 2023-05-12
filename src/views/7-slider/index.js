import React, { useEffect, useState } from "react";
import "./index.css";
import SliderItem from "../../components/SliderItem";
import people from "./data";
const Slider = () => {
  const [data, setData] = useState(people);
  const [index, setIndex] = useState(0);

  useEffect(
    () => {
      let slider = setInterval(() => {
        if (index === data.length - 1) {
          setIndex(0);
        }
        if (index >= 0 && index < data.length - 1) {
          setIndex(index + 1);
        }
      }, 5000);
      return () => clearInterval(slider);
    },
    [index, data]
  );
  const checkSlide = value => {
    if (value === "prev") {
      if (index === 0) {
        setIndex(data.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
    if(value === "next"){
      if (index === data.length -1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };
  return (
    <div className="slider-wrapper">
      <div className="slider-section">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className="section-center">
          <SliderItem data={data} itemIndex={index} />
          <button className="prev" onClick={() => checkSlide("prev")}>
            prev
          </button>
          <button className="next" onClick={() => checkSlide("next")}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slider;
