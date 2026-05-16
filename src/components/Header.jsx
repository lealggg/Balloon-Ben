import { NavLink } from "react-router-dom";
import LOGOCOMPLETO2025 from "./Assets/img/LOGOCOMPLETO2025.png";
import "./Header.css";

export default function Header() {
 const navItems = [
 { label: "Musica", to: "/musica" },
 { label: "Aventuras", to: "/aventuras" },
 { label: "Actividades", to: "/actividades" },
 { label: "Tienda", to: "/tienda" },
 { label: "Eventos", to: "/eventos" },
 { label: "Personajes", to: "/personajes" },
 { label: "club", to: "/club" },
 ];

 return (
 <header className="header">
 <div className="logo">
 <NavLink to="/">
 <img src={LOGOCOMPLETO2025} alt="Logo Balloon & Ben" />
 </NavLink>
 </div>

 <nav className="nav">
 <ul className="barnav">
 {navItems.map((item) => (
 <li key={item.to}>
 <NavLink
 to={item.to}
 className={({ isActive }) => (isActive ? "active" : "")}
 >
 {item.label}
 </NavLink>
 </li>
 ))}
 </ul>
 </nav>
 </header>
 );
}
