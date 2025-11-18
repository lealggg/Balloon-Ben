import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonajesCarousel.css";

import img1 from "./Assets/img/Balloon.jpeg";
import img2 from "./Assets/img/Ben.jpeg";
import img3 from "./Assets/img/Rino.jpeg";
import img4 from "./Assets/img/Jirrafael.jpeg";
import img5 from "./Assets/img/Alfonzorro.jpeg";
import img6 from "./Assets/img/Tite.jpeg";
import img7 from "./Assets/img/La Ardilla.jpeg";
import img8 from "./Assets/img/El Castor.jpeg";

const allImages = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Dividimos las imágenes en grupos de 2
  const slides = [];
  for (let i = 0; i < allImages.length; i += 4) {
    slides.push(allImages.slice(i, i + 4));
  }

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="personajecarousel">
      <button className="arrowp left" onClick={prevSlide}>‹</button>

      <div
        className="personajescarousel-container"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((pair, index) => (
          <div className="pslide-wrapper" key={index}>
            {pair.map((image, idx) => (
              <div key={idx} className="pslide-item">
                <img src={image} alt={`slide-${index}-${idx}`} className="pslide" />
                <button
                  className="pslide-button"
                  onClick={() => navigate("/personajes")}
                >
                  Conócelo más
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button className="arrowp right" onClick={nextSlide}>›</button>

      <div className="indicatorss">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dott ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
