import React, { useState } from "react";
import "./InscripcionClub.css";
import Murcielago from "../pages/assets/img/imagenes club/Murcielago.png";
import BalloonBenEmergente from "../pages/assets/img/imagenes club/BalloonBenEmergente.png"

const InscripcionClub = () => {

    const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // muestra la ventana emergente
  };
  
  return (
    <div className="club-form-container">
      <div className="bat-container">
        <img src={Murcielago} alt="Murciélago" className="bat-image" />
      </div>

      <form className="club-form" onSubmit={handleSubmit}>
        <h2 className="Club-title">Suscríbete al Club Balloon & Ben</h2>

        <input type="text" placeholder="Tu Nombre" />
        <input type="email" placeholder="Tu correo electrónico" />
        <input type="text" placeholder="Tu país" />

        <div className="checkbox-group">
          <p>¿Qué te gustaría recibir?</p>
          <label>
            <input type="checkbox" />
            Noticias y eventos
          </label>
          <label>
            <input type="checkbox" />
            Ofertas exclusivas
          </label>
        </div>

        <div className="authorization">
          <p>Autorización</p>
          <label>
            <input type="checkbox" />
            Acepto recibir correos de Balloon & Ben y estoy de acuerdo con la política de privacidad.
          </label>
        </div>

        <button type="submit" className="join-button">
          ¡Quiero unirme al club!
        </button>
      </form>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>
              ¡Gracias por unirte! <br />
              Pronto recibirás tus primeras sorpresas <br />
              de Balloon & Ben.
            </p>
            <img src={BalloonBenEmergente} alt="Balloon y Ben" className="modal-image" />
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InscripcionClub;
