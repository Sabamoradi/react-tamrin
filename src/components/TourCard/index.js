import React from "react";

const TourCard = (tour) => {
  console.log(tour, "tourData");

  {
    tour.map((tour) => {
      return (
        <div className="single-tour" key={tour.id}>
          hello
        </div>
      );
    });
  }
};
export default TourCard;
