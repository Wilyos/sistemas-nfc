import './VideoSection.css';
import bgVideo from '../assets/background/bg-video.jpg';
import logoSistemas from '../assets/img/logo-sistemas.png';
import { Link } from 'react-router-dom';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-background">
        <img src={bgVideo} alt="Background" className="bg-image" />
        <div className="video-overlay"></div>
      </div>
      
      <div className="video-container">
        {/* Texto superior */}
        <div className="video-text-top">
          <h2>
            En Sistemas NFC, potenciamos la forma en que te conectas con
            <br />
            clientes y equipos, transformando el contacto convencional en
            <br />
            experiencias inteligentes.
          </h2>
        </div>

        {/* Contenedor del video */}
        <div className="video-player-container">
          <div className="video-frame">
            <div className="video-content">
              {/* Aquí irá el reproductor de video */}
              <div className="video-placeholder">
                <div className="play-button">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              {/* Logo de Sistemas en la esquina */}
              <div className="video-logo">
                <span><img src={logoSistemas} alt="" /></span>
              </div>
            </div>
          </div>
        </div>

        {/* Texto inferior */}
        <div className="video-text-bottom">
          <p>
            Ya sea B2B o B2C, ayudamos a empresas, marcas y profesionales a integrar tecnología
            <br />
            NFC para compartir información de manera rápida, efectiva y siempre actualizada.
          </p>
        </div>

        {/* Botón de personalización */}
        <div className="video-cta">
          <Link to="/personaliza-tarjeta" className="personalization-button">
            PERSONALIZALAS TU MISMO AQUÍ
          </Link>
        </div>

        {/* Elementos decorativos */}
        <div className="decorative-elements">
          <div className="tech-grid grid-left"></div>
          <div className="tech-grid grid-right"></div>
          <div className="circle-element circle-top"></div>
          <div className="circle-element circle-bottom"></div>
          <div className="line-element line-left"></div>
          <div className="line-element line-right"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
