import YouTubeSection from "../components/YouTubeSection";
import "./Videos.css"
import Ben from "../pages/assets/img/imagenes videos/Ben.png";
function Videos() {
    return (
        <div className="videos">
        <div className="videos-wrapper">
    <h1 className="videos-title">Videos musicales de Balloon y Ben</h1>
    </div>
    <div className="ben-container">
            <img src={Ben} alt="Ben" className="ben" />
          </div>
    <div className="videos-descripciones">
    <h3 className="videos-descripcion">Canta, ríe y aprende junto a Balloon y Ben.  
 Descubre sus aventuras musicales, explora los sonidos del mundo natural y comparte en familia momentos llenos de curiosidad y diversión.</h3>
    </div>
    
        <YouTubeSection />
    </div>
    );
    

}
export default Videos;