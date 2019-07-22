import React from "react";
import { Carousel } from "react-bootstrap";
import "./LandingPageCarousel.css";


function LandingPageCarousel() {
  return (
    <div className="container">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://oimg.photobucket.com/albums/v240/Chenla/car3.png?t=1563657862"
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>This is the place to peruse and post free local items</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://oimg.photobucket.com/albums/v240/Chenla/car2.jpg?t=1563658066"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h4>Help elimnate waste by reducing, reusing, and upcycling.</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/lg48n0Y.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h4>Create an account to search and share items!</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

   ) }

export default LandingPageCarousel;
