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
    <h3 className="eventos-descripcion">Descubre nuestros próximos eventos. Prepárate para cantar, aprender y jugar con Balloon y Ben fuera de la pantalla.</h3>
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