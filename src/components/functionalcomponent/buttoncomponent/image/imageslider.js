import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/chicago.jpg" // Assuming chicago.jpg is placed in the public directory
          alt="Chicago"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\la (1).jpg" 
          alt="Los Angeles"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/ny.jpg" 
          alt="New York"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
