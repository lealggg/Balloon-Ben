import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/quicksand";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Personajes from "./pages/Personajes";
import Descargables from "./pages/Descargables";
import Eventos from "./pages/Eventos";
import Club from "./pages/Club";
import ActividadEspecifica from "./pages/ActividadEspecifica";
import Evento1 from "./pages/Evento1";
import Musica from "./pages/Musica";
import Aventuras from "./pages/Aventuras";
import Tienda from "./pages/Tienda";
import "./App.css";

function App() {
 return (
 <Router>
 <Header />
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/musica" element={<Musica />} />
 <Route path="/aventuras" element={<Aventuras />} />
 <Route path="/actividades" element={<Descargables />} />
 <Route path="/tienda" element={<Tienda />} />
 <Route path="/eventos" element={<Eventos />} />
 <Route path="/personajes" element={<Personajes />} />
 <Route path="/club" element={<Club />} />

 <Route path="/actividadespecifica" element={<ActividadEspecifica />} />
 <Route path="/evento1" element={<Evento1 />} />
 </Routes>
 <Footer />
 </Router>
 );
}

export default App;
