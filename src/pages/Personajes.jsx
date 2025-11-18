import React from "react";
import "./Personajes.css";

import img1 from "../pages/assets/img/imagenes personajes/PersonajeBalloon.png";
import img2 from "../pages/assets/img/imagenes personajes/PersonajeBen.png";
import img3 from "../pages/assets/img/imagenes personajes/PersonajeRino.png";
import img4 from "../pages/assets/img/imagenes personajes/PersonajeJirrafael.png";
import img5 from "../pages/assets/img/imagenes personajes/PersonajeAlfonzorro.png";
import img6 from "../pages/assets/img/imagenes personajes/PersonajeTite.png";
import img7 from "../pages/assets/img/imagenes personajes/PersonajeLaArdilla.png";
import img8 from "../pages/assets/img/imagenes personajes/PersonajeElCastor.png";

const personajes = [
  { nombre: "PersonajeBalloon", img: img1 },
  { nombre: "PersonajeBen", img: img2 },
  { nombre: "PersonajeRino", img: img3 },
  { nombre: "PersonajeJirrafael", img: img4 },
  { nombre: "PersonajeAlfonzorro", img: img5 },
  { nombre: "PersonajeTite", img: img6 },
  { nombre: "PersonajeLaArdilla", img: img7 },
  { nombre: "PersonajeElCastor", img: img8 },
];

function Personajes() {
    return (
<div className="personajes">
        <div className="personajes-wrapper">
    <h1 className="personajes-title">¡Te presentamos el mundo Balloon y Ben!</h1>
    </div>
    <div className="personajes-descripciones">
    <h3 className="personajes-descripcion">Acompaña a cada personaje en su presentación: qué sueñan, qué temen y cómo, juntos, transforman cada pequeño reto en una gran aventura.</h3>
    </div>
    <div className="per-personajes">
    <h1 className="per-personaje">Personajes</h1>
    </div>
     <div className="personajes-grid">
        {personajes.map((p, index) => (
          <div key={index} className="personaje-card">
            <img src={p.img} alt={`Personaje ${index + 1}`} className="personaje-img" />
          </div>
        ))}
      </div>
    </div>
    );
}
export default Personajes;