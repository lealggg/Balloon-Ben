import React from "react";
import "./AppCardVideo.css";

export default function AppCardVideo({ img, desc, onClick }) {
  return (
    <div className="vide-card">
      <img src={img} alt={desc} className="vide-img" />
      <p className="vide-desc">{desc}</p>
      <button className="vide-btn azul" onClick={onClick}>
        Ver
      </button>
    </div>
  );
}