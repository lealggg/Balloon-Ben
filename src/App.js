import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/quicksand";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Personajes from "./pages/Personajes";
import Videos from "./pages/Videos";
import Descargables from "./pages/Descargables";
import Eventos from "./pages/Eventos";
import Club from "./pages/Club";
import ActividadEspecifica from "./pages/ActividadEspecifica";
import Evento1 from "./pages/Evento1";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/actividades" element={<Descargables />} />
        <Route path="/actividadespecifica" element={<ActividadEspecifica />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/evento1" element={<Evento1 />} />
        <Route path="/club" element={<Club />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
