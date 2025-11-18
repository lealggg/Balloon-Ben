import React from "react";
import "./AppCardActividad.css";

export default function AppCardActividad({ img, desc, onClick }) {
  return (
    <div className="activ-card">
      <img src={img} alt={desc} className="activ-img" />
      <p className="activ-desc">{desc}</p>
      <button className="activ-btn azul" onClick={onClick}>
        Descargar
      </button>
    </div>
  );
}