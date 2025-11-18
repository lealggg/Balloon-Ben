import "./Descargables.css";
import { useNavigate } from "react-router-dom";
import Tite from "../pages/assets/img/imagenes actividades/Tite.png";
import ImgActividades from "./assets/img/imagenes actividades/ImgActividades.jpeg";
import ImgActividades2 from "./assets/img/imagenes actividades/ImgActividades2.jpeg";
import ImgActividades3 from "./assets/img/imagenes actividades/ImgActividades3.jpeg";
import ImgActividades4 from "./assets/img/imagenes actividades/ImgActividades4.jpeg";
import ImgActividades5 from "./assets/img/imagenes actividades/ImgActividades5.jpeg";
import ImgActividades6 from "./assets/img/imagenes actividades/ImgActividades6.jpeg";
import AppCardActividad from "../components/AppCardActividad";

function Descargables() {

    const navigate = useNavigate();

    const instrumentos = [
        {
          img: ImgActividades,
          desc: "",
        },
        {
          img: ImgActividades4,
          desc: "",
        },
      ];

      const colorea = [
        {
          img: ImgActividades2,
          desc: "",
        },
        {
          img: ImgActividades5,
          desc: "",
        },
      ];

      const misiones = [
        {
          img: ImgActividades3,
          desc: "",
        },
        {
          img: ImgActividades6,
          desc: "",
        },
      ];

      const irAPaginaActividadEspecifica = () => {
    navigate("/actividadespecifica");
  };

     return (
        <div className="actividades">
        <div className="actividades-wrapper">
    <h1 className="actividades-title">Actividades educativas para descargar</h1>
    </div>
    <div className="tite-container">
                <img src={Tite} alt="Tite" className="tite" />
              </div>
    <div className="actividades-descripciones">
    <h3 className="actividades-descripcion">Disfruta de nuestros materiales educativos para niños donde y cuando quieras. Acompaña a tus pequeños en su aprendizaje con estos increíbles recursos.
</h3>
    </div>
     <div className="home-instrumentos">
    <h1 className="home-instrumento">Instrumentos</h1>
    </div>
     <div className="activ-row">
            {instrumentos.map((instrumento, index) => (
              <AppCardActividad
                key={index}
                img={instrumento.img}
                desc={instrumento.desc}
                onClick={irAPaginaActividadEspecifica}
              />
            ))}
          </div>   
          
     <div className="home-colorean">
    <h1 className="home-colorea">Colorea</h1>
    </div> 
    <div className="activ-row">
            {colorea.map((colorean, index) => (
              <AppCardActividad
                key={index}
                img={colorean.img}
                desc={colorean.desc}
                onClick={irAPaginaActividadEspecifica}
              />
            ))}
          </div> 

     <div className="home-mision">
    <h1 className="home-misiones">Misiones</h1>
    </div> 
    <div className="activ-row">
            {misiones.map((mision, index) => (
              <AppCardActividad
                key={index}
                img={mision.img}
                desc={mision.desc}
                onClick={irAPaginaActividadEspecifica}
              />
            ))}
          </div>       
    </div>
    );
}
export default Descargables;