import "./PaginaInicio.css";
import LOGOCOMPLETO2025 from "./Assets/img/LOGOCOMPLETO2025.png";
export default function PaginaInicio() {
  return (
    <header className="header">
      <div className="logo">
        <img src={LOGOCOMPLETO2025} alt="Logo Balloon&Ben" />
      </div>

      <nav className="nav">
        <ul className="barnav">
          <li><a href="#personajes">Personajes</a></li>
          <li><a href="#capitulos">Capítulos</a></li>
          <li><a href="#descargables">Descargables</a></li>
          <li><a href="#eventos">Eventos</a></li>
          <li><a href="#club">Club</a></li>
        </ul>
      </nav>
    </header>
  );
}
