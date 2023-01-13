import React from "react";
import { Carousel, Card, Stack, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
function GridCarousel() {
  const places = [
    [
      {
        image: require("../../images/grid_places/coorg.jpg"),
        caption: "Coorg",
        description:
          "Framed by the Western Ghats mountain range, it’s known for the Raja’s Seat, a simple monument overlooking forests and rice paddies.",
      },
      {
        image: require("../../images/grid_places/goa.jpg"),
        caption: "Goa",
        description:
          "Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages",
      },
      {
        image: require("../../images/grid_places/hampi.jpg"),
        caption: "Hampi",
        description:
          "Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire.",
      },
    ],
    [
      {
        image: require("../../images/grid_places/kashmir.jpg"),
        caption: "Kashmir",
        description:
          "Nature has endowed Kashmir with implausible beauty and is rightly called “Paradise on Earth”. Kashmir is resplendent with stunning Chinar trees, silver lakes, and crystal blue rivers that are sourced from the icy mountains.",
      },
      {
        image: require("../../images/grid_places/kerala.jpg"),
        caption: "Kerala",
        description:
          "Kerala known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife.",
      },
      {
        image: require("../../images/grid_places/manali.jpg"),
        caption: "Manali",
        description:
          "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.",
      },
    ],
    [
      {
        image: require("../../images/grid_places/Ooty.jpg"),
        caption: "Ooty",
        description:
          "Ooty (short for Udhagamandalam) is a resort town in the Western Ghats mountains, in southern India's Tamil Nadu state. Founded as a British Raj summer resort, it retains a working steam railway line.",
      },
      {
        image: require("../../images/grid_places/pondy.jpg"),
        caption: "Pondy",
        description:
          "Pondicherry's French legacy is preserved in its French Quarter, with tree-lined streets, mustard-colored colonial villas and chic boutiques. A seaside promenade runs along the Bay of Bengal and passes several statues",
      },
      {
        image: require("../../images/grid_places/wayanad.jpg"),
        caption: "Wayanad",
        description:
          "Wayanad is famous for its large amount of camping and trekking trails, breathtaking waterfalls, caves, bird-watching sites, flora, fauna and an overall plethora of magnificent sights.",
      },
    ],
  ];
  return (
    <div className="bg-dark bg-opacity-25 container-fluid">
      <div className="gridCarouselHeader">
        <h2>Must Visit Destinations</h2>
        <h5>
          From historical cities to natural splendours, come see the best of
          India
        </h5>
      </div>
      <Carousel style={{ height: 600 }}>
        {places.map((place, index) => (
          <Carousel.Item style={{ height: 600 }}>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card style={{ width: "18rem", height: "30rem" }}>
                <Card.Body>
                  <img
                    className="d-block w-100"
                    src={place[0].image}
                    alt="image"
                    loading="lazy"
                    style={{ height: "200px" }}
                  />
                  <Card.Title>{place[0].caption}</Card.Title>
                  <Card.Text style={{ height: "10rem" }}>
                    {place[0].description}
                  </Card.Text>
                  <Button variant="primary">visit</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", height: "30rem" }}>
                <Card.Body>
                  <img
                    className="d-block w-100"
                    src={place[1].image}
                    alt="image"
                    loading="lazy"
                    style={{ height: "200px" }}
                  />
                  <Card.Title>{place[1].caption}</Card.Title>
                  <Card.Text style={{ height: "10rem" }}>
                    {place[1].description}
                  </Card.Text>
                  <Button variant="primary">visit</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", height: "30rem" }}>
                <Card.Body>
                  <img
                    className="d-block w-100"
                    src={place[2].image}
                    alt="image"
                    loading="lazy"
                    style={{ height: "200px" }}
                  />
                  <Card.Title>{place[2].caption}</Card.Title>
                  <Card.Text style={{ height: "10rem" }}>
                    {place[2].description}
                  </Card.Text>
                  <Button variant="primary">visit</Button>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
export default GridCarousel;
