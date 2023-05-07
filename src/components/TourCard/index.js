import React, { useEffect, useState } from "react";
import BaseButton from "../Button/index";
const TourCard = ({tour,removeItem}) => {
  const [readMore, setReadmore] = useState(false);
  return (
    <>
      {tour.map((item) => {
        return (
          <div className="single-tour" key={item.id}>
            <img src={item.image} />
            <footer>
              <div className="tour-info">
                <h4>{item.name}</h4>
                <h4 className="price">{item.price}</h4>
              </div>
              <p>
                {readMore ? item.info : `${item.info.substring(0, 200)}...`}
                <button onClick={() => setReadmore(!readMore)}>
                  {readMore ? "Show Less" : "Read More"}
                </button>
              </p>
              <BaseButton title="not interested" clickBtn={()=>{removeItem(item.id)}}/>
            </footer>
          </div>
        );
      })}
    </>
  );
};
export default TourCard;
