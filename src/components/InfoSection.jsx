import './InfoSection.css';
import { PiStarFourFill } from "react-icons/pi";
import bgVideo from '../assets/background/bg-four.png';
import telephone from '../assets/img/telephone.png';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-background">
        <img src={bgVideo} alt="Background" className="bg-image" />
        <div className="info-overlay"></div>
      </div>
      
      <div className="info-container">
        {/* Header con título destacado */}
        <div className="info-header">
          <div className="header-badge">
            <span>CON NUESTRAS SOLUCIONES NFC,</span>
            <span className="highlight">TU INFORMACIÓN VA MÁS LEJOS:</span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="info-content">
          {/* Lista de beneficios lado izquierdo */}
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-icon">
                <PiStarFourFill className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  <strong>Compartir tu información profesional al instante,</strong> compatible con cualquier dispositivo.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <PiStarFourFill className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  <strong>Conectar con tus clientes desde WhatsApp,</strong> redes o portafolios digitales con un solo toque.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <PiStarFourFill className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  <strong>Mostrar tu ubicación, enlaces y contenido</strong> multimedia de forma centralizada y accesible.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <PiStarFourFill className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  <strong>Personalizar tu tarjeta o solución NFC</strong> con la identidad visual de tu marca.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <PiStarFourFill className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  <strong>Actualizar tu información en tiempo real,</strong> sin necesidad de impresiones físicas.
                </p>
              </div>
            </div>
          </div>

          {/* Imagen del teléfono lado derecho */}
          <div className="phone-showcase">
            <div className="phone-container">
              <img src={telephone} alt="NFC Mobile App" className="phone-image" />
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="decorative-elements">
          <div className="tech-grid grid-top-left"></div>
          <div className="tech-grid grid-bottom-right"></div>
          <div className="circle-element circle-small"></div>
          <div className="circle-element circle-medium"></div>
          <div className="line-element line-diagonal-1"></div>
          <div className="line-element line-diagonal-2"></div>
          <div className="pattern-overlay pattern-left"></div>
          <div className="pattern-overlay pattern-right"></div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
