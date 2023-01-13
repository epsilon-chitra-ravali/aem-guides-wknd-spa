import React from "react";
import { Carousel, Card, Stack, Button } from "react-bootstrap";

function ExploreGrid() {
  const places = [
    {
      image: require("../../images/khajuraho.jpg"),
      caption: "khajuraho",
    },
    {
      image: require("../../images/taj.jpg"),
      caption: "tajmahal",
    },
    {
      image: require("../../images/ajanta.jpg"),
      caption: "ajanta",
    },
  ];
  return (
    <div
      className="bg-dark bg-opacity-25 container-fluid"
      style={{ paddingBottom: "5rem" }}
    >
      <div className="gridCarouselHeader">
        <h2>Explore Before You Visit</h2>
        <h5>Dive deeper into India's rich culture and heritage</h5>
      </div>

      <Stack
        direction="horizontal"
        className="h-100 justify-content-center align-items-center"
        gap={3}
      >
        {places.map((place, index) => (
          <Card style={{ width: "18rem", height: "17rem" }}>
            <Card.Body>
              <img
                className="d-block w-100"
                src={place.image}
                alt="image"
                loading="lazy"
                style={{ height: "200px" }}
              />
              <Card.Title>{place.caption}</Card.Title>
              <img
                // className="d-block w-100"
                src={require("../../images/play.png")}
                alt="image"
                loading="lazy"
                style={{ height: "40px", width: "40px" }}
              />
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </div>
  );
}
export default ExploreGrid;
