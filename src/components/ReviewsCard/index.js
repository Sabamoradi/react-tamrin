import React, { useState } from "react";
import BaseButton from "../Button";
const ReviewsCard = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  const clickPrev = () => {
    if(index === 0){
      setIndex(reviews.length -1)
    }else{
      setIndex((index)=>{
        let newIndex = index - 1
        return newIndex
      })
    }
  };
  const clickNext = () =>{
    if(index === reviews.length -1){
      setIndex(0)
    }else{
      setIndex((index)=>{
        let newIndex = index + 1
        return newIndex
      })
    }
  }
  const randomPerson = () =>{
    let newIndex = Math.floor(Math.random()*reviews.length)
    if(newIndex > reviews.length - 1){
      setIndex(0)
    }else{
      setIndex(newIndex)
    }
    console.log(newIndex , 'newIndex');
  }
  return (
    <div className="mainCont">
      <div className="imgcont">
        <img src={image} alt={name} />
      </div>
      <h4 className="author">
        {name}
      </h4>
      <p className="job">
        {job}
      </p>
      <p className="info">
        {text}
      </p>
      <div className="btn-cont">
        {/* <BaseButton title={'prev'}/>
        <BaseButton title={'next'}/> */}
        <button className="next-btn" onClick={clickNext}>
          next
        </button>
        <button className="prev-btn" onClick={clickPrev}>prev</button>
      </div>
      <button className="random-btn" onClick={randomPerson}>Suprise Me</button>
    </div>
  );
};
export default ReviewsCard;
