import "./Evento1.css"
import Domo from "./assets/img/imagenes evento1/Domo.jpeg"


function Evento1() {
    return(
        <div className="evento1">
        <div className="evento1-wrapper">
    <h1 className="evento1-title">Domo mágico Balloon y Ben</h1>
    </div>
    <img src={Domo} alt="" className="img-evento1" />
        <div className="evento1-descripciones">
        <h3 className="evento1-descripcion">Ven a vivir una experiencia llena de diversión, aprendizaje y cuidado por el planeta! En el Domo Mágico Balloon y Ben, los niños podrán entrar a un colorido domo inspirado en el mundo de la serie para jugar, crear y descubrir cómo ayudar al medio ambiente a través de cinco actividades.</h3>
        </div>
        <div class="evento11">
  <div class="evento11-lista">
    <h2>Nuestras actividades...</h2>
    <ul>
      <li><span>1</span><strong>Plastilina ecológica:</strong> crea figuras inspiradas en la naturaleza.</li>
      <li><span>2</span><strong>Arena mágica:</strong> construye y deja volar tu imaginación.</li>
      <li><span>3</span><strong>Juego de reciclaje:</strong> aprende a separar y recolectar residuos de forma divertida.</li>
      <li><span>4</span><strong>Manualidades recicladas:</strong> transforma materiales usados en nuevas creaciones.</li>
      <li><span>5</span><strong>Zona creativa libre:</strong> pinta, juega y comparte con Balloon, Ben y sus amigos.</li>
    </ul>
  </div>

  <div class="evento11-card">
    <div class="card-info-evento11">
      <p>📅 5 de Noviembre</p>
      <p>📍 CC. El Tesoro</p>
      <p>⏰ 9:00AM - 6:00PM</p>
    </div>
    <button class="btn-reservar">Reservar evento</button>
    <button class="btn-compartir">Compartir</button>
  </div>
</div>



    </div>
    )
    
}
export default Evento1;