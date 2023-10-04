import { useState } from "react";
import { list, shortList, LongList } from "./data";
import "./style/Carousel.css";
import { nanoid } from "nanoid";

const MainCarousel = () => {
  const [peoples, setPeople]=useState(shortList);
  

  return <section className="carousel-section">
    {peoples.map(person)=>{
      
    }}
  </section>;
};

export default MainCarousel;
