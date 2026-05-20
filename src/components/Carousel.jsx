import React, { useState, useEffect } from "react";
import "./Carousel.css";

import img1 from "./Assets/img/Carousel1.2.jpeg";
import img2 from "./Assets/img/Carousel2.2.jpeg";
import img3 from "./Assets/img/Carousel3.2.jpeg";

const images = [img1, img2, img3];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    

    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>‹</button>

      <div className="carousel-container"
      style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide-wrapper ${index === current ? "active" : ""}`}
          >
            <img src={image} alt={`slide-${index}`} className="slide" />

            {index === 0 && (
              <button
                className="slide-button yellow"
                onClick={() => (window.location.href = "/musica")}
              >
                Conoce más
              </button>
            )}
            {index === 1 && (
              <button
                className="slide-button orange"
                onClick={() => (window.location.href = "/eventos")}
              >
                Conoce más
              </button>
            )}
            {index === 2 && (
              <button
                className="slide-button blue"
                onClick={() => (window.location.href = "/aventuras")}
              >
                Conoce más
              </button>
            )}
          </div>
        ))}
      </div>
      

      <button className="arrow right" onClick={nextSlide}>›</button>

      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
