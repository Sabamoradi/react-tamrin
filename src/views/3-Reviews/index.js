import React, { useState } from "react";
import "./index.css";
import reviews from "./data";
import ReviewsCard from "../../components/ReviewsCard";
const Reviews = () => {
  const [userData, setUserData] = useState(reviews);
  return (
    <main className="review-main">
      <section>
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline" />
        </div>
        <ReviewsCard reviews={userData} />
        {/* {userData.map(el => {
          return <ReviewsCard reviews={el} />;
        })} */}
      </section>
    </main>
  );
};
export default Reviews;
