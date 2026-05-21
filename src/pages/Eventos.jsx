import "./Eventos.css"
import { useNavigate } from "react-router-dom";
import BienvenidaEvento from "./assets/img/imagenes eventos/BienvenidaEvento.jpeg"
import ImgEvento from "./assets/img/imagenes home/ImgEvento.jpeg";
import AppCardEvente from "../components/AppCardEvente";

function Eventos() {

    const navigate = useNavigate();

    const eventos = [
        {
          img: ImgEvento,
          desc: "",
        },
        {
          img: ImgEvento,
          desc: "",
        },
        {
          img: ImgEvento,
          desc: "",
        },
        {
          img: ImgEvento,
          desc: "",
        },
      ];

const irAPaginaEvento1 = () => {
    navigate("/evento1");
  };

    return(
        <div className="eventos">
        <div className="eventos-wrapper">
    <h1 className="eventos-title">¡El escenario es tuyo!</h1>
    </div>
    <img src={BienvenidaEvento} alt="" className="img-eventos" />
    <div className="eventos-descripciones">
    <h3 className="eventos-descripcion">En un vibrante escenario que combina animación digital y magia teatral, Ben, el elefante más curioso del
campamento, se embarca en una misión vital: convertirse en un Guardián del Planeta. Junto a su inseparable amigo
Balloon y un carismático grupo de animales, Ben deberá superar desafíos que ponen a prueba su ingenio y su
capacidad de trabajar en equipo. Cuando la salud del bosque y el río se ven amenazadas por la basura, el show se
transforma en una experiencia colectiva donde el público deja de ser espectador para convertirse en protagonista de
la solución. Un viaje musical diseñado para inspirar a la Generación Alpha a cuidar su entorno a través de la acción y la
alegría.</h3>
    </div>
    <div className="show-eventos">
        <h1 className="show-evento">Más que un show, una misión colectiva</h1>
        </div>
        <div className="show-subEventos">
        <h3 className="show-subEvento">"El Gran Día de Ben" traslada los valores educativos de la serie animada a un formato presencial interactivo.
Aprovechamos el reconocimiento de marca de la serie para crear un evento de alta demanda familiar.</h3>
        </div>
    
    
      <div className="diferenciadores__content">
        <h2 className="diferenciadores__title">Diferenciadores:</h2>

        <p>
          <strong>Edu-entretenimiento:</strong> mensaje ecológico urgente
          (microplásticos, reciclaje, la importancia de las abejas).
        </p>

        <p>
          <strong>Interacción activa:</strong> el público no es espectador; es
          nombrado "Guardián del Planeta".
        </p>

        <p>
          <strong>Hit-Factor:</strong> canciones originales diseñadas para el
          engagement post-show.
        </p>

        <p className="diferenciadores__final">
          Espera muy pronto las fechas y lugares dónde nos estaremos presentando.
        </p>
      </div>
    

    <div className="evento-eventos">
        <h1 className="evento-evento">Eventos</h1>
        </div>
        <div className="evento-subEventos">
        <h3 className="evento-subEvento">Nuestros proximos eventos</h3>
        </div>

       <div className="event-row">
            {eventos.map((evento, index) => (
              <AppCardEvente
                key={index}
                img={evento.img}
                desc={evento.desc}
                onClick={irAPaginaEvento1}
                
              />
            ))}
          </div>
           <div className="event-row">
            {eventos.map((evento, index) => (
              <AppCardEvente
                key={index}
                img={evento.img}
                desc={evento.desc}
                onClick={irAPaginaEvento1}
                
              />
            ))}
          </div>


</div>
    )
}
export default Eventos;