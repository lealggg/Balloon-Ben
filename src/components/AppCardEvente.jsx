import React from "react";
import "./AppCardEvente.css";

export default function AppCardEvente({ img, desc, onClick }) {
  return (
    <div className="event-card">
      <img src={img} alt={desc} className="event-img" />
      <p className="event-desc">{desc}</p>
      <button className="event-btn azul" onClick={onClick}>
        Ver más
      </button>
    </div>
  );
}