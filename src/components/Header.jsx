import { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGOCOMPLETO2025 from "./Assets/img/LOGOCOMPLETO2025.png";
import "./Header.css";

export default function Header() {
 const [menuOpen, setMenuOpen] = useState(false);

 const navItems = [
 { label: "Musica", to: "/musica" },
 { label: "Aventuras", to: "/aventuras" },
 { label: "Actividades", to: "/actividades" },
 { label: "Tienda", to: "/tienda" },
 { label: "Eventos", to: "/eventos" },
 { label: "Personajes", to: "/personajes" },
 { label: "Club", to: "/club" },
 ];

 return (
 <header className="header">
 <div className="logo">
 <NavLink to="/" onClick={() => setMenuOpen(false)}>
 <img src={LOGOCOMPLETO2025} alt="Logo" />
 </NavLink>
 </div>

 <button
 className="menu-toggle"
 onClick={() => setMenuOpen(!menuOpen)}
 aria-label="Abrir menú"
 >
 {menuOpen ? "✕" : "☰"}
 </button>

 <nav className={`nav ${menuOpen ? "open" : ""}`}>
 <ul className="barnav">
 {navItems.map((item) => (
 <li key={item.to}>
 <NavLink
 to={item.to}
 className={({ isActive }) => (isActive ? "active" : "")}
 onClick={() => setMenuOpen(false)}
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
