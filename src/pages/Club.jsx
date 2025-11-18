import InscripcionClub from "../components/InscripcionClub";
import "./Club.css"
import ImgClub from "./assets/img/imagenes club/ImgClub.jpeg"


function Club() {
    return(
        <div className="club">
        <div className="club-wrapper">
    <h1 className="club-title">Únete al Club de Balloon&Ben</h1>
    </div>
    <img src={ImgClub} alt="" className="img-club" />
        <div className="club-descripciones">
        <h3 className="club-descripcion">Sé parte de nuestra comunidad y recibe noticias y sorpresas especiales directamente en tu correo.</h3>
        </div>
        <InscripcionClub/>



    </div>
    )
    
}
export default Club;