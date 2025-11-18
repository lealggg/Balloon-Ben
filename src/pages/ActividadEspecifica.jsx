import "./ActividadEspecifica.css"
import BenMaracas from "./assets/img/imagenes actividad especifica/BenMaracas.jpeg"
import ImgActivEsp from "./assets/img/imagenes actividad especifica/ImgActivEsp.jpeg"


function ActividadEspecifica() {
    return(
        <div className="actividadespecifica">
            <img src={BenMaracas} alt="" className="img-actividadespecifica" />
        <div className="actividadespecifica-wrapper">
    <h1 className="actividadespecifica-title">Maracas de la tierra</h1>
    
   
        <div className="actividadespecifica-descripciones">
        <h3 className="actividadespecifica-descripcion">Descubre una forma divertida y consciente de pasar tiempo en familia. Con las maracas de la tierra, los más pequeños podrán crear su propio instrumento musical usando materiales reciclados, mientras aprenden sobre el ritmo, la naturaleza y el valor de cuidar lo que nos rodea.</h3>
        </div>
        <h1 className="actividadespecifica-necesidad">Necesitarás</h1>
        <div className="actividadespecifica-explicaciones">
        <h3 className="actividadespecifica-explicacion">Aquí te dejamos algunas ideas para armar tus maracas de la tierra — pero recuerda que puedes usar lo que tengas en casa y dejar volar tu imaginación.</h3>
        </div>
        <ul className="actividad-lista">
          <li><span>1</span> Botellas plásticas pequeñas o envases reciclados para el cuerpo de las maracas.</li>
          <li><span>2</span> Rollos de papel higiénico o tubos de cartón para los mangos.</li>
          <li><span>3</span> Cinta adhesiva para unir y asegurar las piezas.</li>
          <li><span>4</span> Semillas, piedritas o arroz para darles sonido.</li>
          <li><span>5</span> Hojas secas, flores o pintura para decorarlas con un toque natural.</li>
        </ul>
      </div>

      <div className="actividad-imagen">
        <img src={ImgActivEsp} alt="Materiales necesarios" />
      </div>
        </div>
        
        



    
    )
    
}
export default ActividadEspecifica;