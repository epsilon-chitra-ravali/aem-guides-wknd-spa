import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const data = [
  {
    image: require("../../images/Optimized-india1.webp"),
    caption: "Caption 1",
    description: "Description 1",
  },
  {
    image: require("../../images/Optimized-india2.webp"),
    caption: "Caption 2",
    description: "Description 2",
  },
  {
    image: require("../../images/Optimized-india3.webp"),
    caption: "Caption 3",
    description: "Description 3",
  },
  {
    image: require("../../images/Optimized-india4.webp"),
    caption: "Caption 4",
    description: "Description 4",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const [descriptionText, setDescriptionText] = useState("less");
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-parent">
      <Carousel activeIndex={index} onSelect={handleSelect} data-testid="handle-select">
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "40rem" }}
                src={slide.image}
                alt="slider image"
                loading="lazy"
              />
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default HomeCarousel;
