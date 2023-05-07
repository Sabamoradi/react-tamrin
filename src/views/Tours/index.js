import React, { useEffect, useState } from "react";
import "./index.css";
import TourCard from "../../components/TourCard/index";
const url = "https://course-api.com/react-tours-project";
const Tours = () => {
  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(true);
  const removeItem = (id) => {
    const newTour = tourData.filter((tour)=>tour.id !== id)
    setTourData(newTour);
  };
  const getData = async () => {
    const response = await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((tours) => {
        setLoading(false);
        setTourData(tours);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (tourData.length === 0) {
    return <h2>hello</h2>;
  }
  return (
    <main className="main-tour">
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline" />
        <TourCard tour={tourData} removeItem={removeItem} />
      </div>
    </main>
  );
};
export default Tours;
