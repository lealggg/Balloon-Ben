import { NavLink } from "react-router-dom";
import LOGOCOMPLETO2025 from "./Assets/img/LOGOCOMPLETO2025.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={LOGOCOMPLETO2025} alt="Logo Balloon & Ben" />
        </NavLink>
      </div>

      <nav className="nav">
        <ul className="barnav">
          <li>
            <NavLink
              to="/personajes"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Personajes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/videos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/actividades"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Actividades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/eventos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Eventos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/club"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Club
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
