import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Carousel from "../components/Carousel";
import ImgEvento from "./assets/img/imagenes home/ImgEvento.jpeg";
import ImgActividades from "./assets/img/imagenes home/ImgActividades.jpeg";
import ImgActividades2 from "./assets/img/imagenes home/ImgActividades2.jpeg";
import ImgActividades3 from "./assets/img/imagenes home/ImgActividades3.jpeg";
import ImgVideos from "./assets/img/imagenes home/ImgVideos.jpeg";
import PersonajesCarousel from "../components/PersonajesCarousel";
import AppCardEvente from "../components/AppCardEvente";
import AppCardActividad from "../components/AppCardActividad";
import AppCardVideo from "../components/AppCardVideo";

const Home = () => {
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

  const actividades = [
    {
      img: ImgActividades,
      desc: "",
    },
    {
      img: ImgActividades2,
      desc: "",
    },
    {
      img: ImgActividades3,
      desc: "",
    },
  ];

  const videos = [
    {
      img: ImgVideos,
      desc: "",
    },
    {
      img: ImgVideos,
      desc: "",
    },
    {
      img: ImgVideos,
      desc: "",
    },
    {
      img: ImgVideos,
      desc: "",
    },
  ];
  // Función que lleva a la página de eventos
  const irAPaginaAventuras = () => {
    navigate("/aventuras");
  };
  const irAPaginaActividades = () => {
    navigate("/actividades");
  };
  const irAPaginaVideos = () => {
    navigate("/videos");
  };
  const irAPaginaPersonajes = () => {
    navigate("/personajes");
  };
  return (
    <div className="home">
        <div className="home-wrapper">
    <h1 className="home-title">¡Bienvenido al mundo de Balloon & Ben!</h1>
     <p className="home-subtitle">
 
 </p>
    </div>
        <Carousel />
         <div className="home-descripciones">
    <h3 className="home-descripcion">Un espacio seguro, creativo y lleno de música donde niños y familias pueden aprender, imaginar y compartir juntos.
En Balloon and Ben creemos que el entretenimiento infantil también puede ser amable, positivo y significativo. Por eso
creamos canciones, historias y aventuras que inspiran valores como el cuidado del planeta, la empatía, la amistad y el
trabajo en equipo.
Aquí las familias encuentran un lugar para cantar, bailar, aprender y disfrutar con tranquilidad, en un entorno pensado
especialmente para los niños.
Un mundo donde aprender se convierte en una aventura feliz para compartir en familia.</h3>
    </div>
    <div className="home-eventos">
    <h1 className="home-evento">Aventuras</h1>
    </div>
    <div className="home-subEventos">
    <h3 className="home-subEvento">Momentos únicos para compartir, aprender y disfrutar juntos.</h3>
    </div>

   <div className="event-row">
        {eventos.map((evento, index) => (
          <AppCardEvente
            key={index}
            img={evento.img}
            desc={evento.desc}
            onClick={() => navigate("/aventuras")}
          />
        ))}
      </div>
     <div className="btn-container">
  <button className="btn-outline" onClick={irAPaginaAventuras}>Ver todas las Aventuras</button>
</div>

<div className="home-actividades">
    <h1 className="home-actividad">Actividades</h1>
    </div>
    <div className="home-subActividades">
    <h3 className="home-subActividad">¡Manos a la obra! Juega y diviértete mientras aprendes.</h3>
    </div>
  
 <div className="activ-row">
        {actividades.map((actividad, index) => (
          <AppCardActividad
            key={index}
            img={actividad.img}
            desc={actividad.desc}
            onClick={() => navigate("/actividades")}
          />
        ))}
      </div>
        <div className="btn-container">
  <button className="btn-outline" onClick={irAPaginaActividades}>Mira nuestras Actividades</button>
</div>

<div className="home-videos">
    <h1 className="home-video">Musica</h1>
    </div>
    <div className="home-subVideos">
    <h3 className="home-subVideo">Aprende y explora nuevos temas con historias llenas de diversión y conocimiento.</h3>
    </div>

 <div className="vide-row">
        {videos.map((video, index) => (
          <AppCardVideo
            key={index}
            img={video.img}
            desc={video.desc}
            onClick={() => navigate("/videos")}
          />
        ))}
      </div>
        <div className="btn-container">
  <button className="btn-outline" onClick={irAPaginaVideos}>Mira nuestra agenda completa</button>
</div>

<div className="home-personajes">
    <h1 className="home-personaje">Personajes</h1>
    </div>
    <div className="home-subPersonajes">
    <h3 className="home-subPersonaje">Conoce a los amigos que te acompañarán en cada aventura.</h3>
    </div>
     <PersonajesCarousel />
      <div className="btn-container">
  <button className="btn-outline" onClick={irAPaginaPersonajes}>Conoce nuestros Personajes</button>
</div>
      
    </div>
  );
};

export default Home;
