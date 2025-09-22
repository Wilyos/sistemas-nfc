import './InfoSection.css';
import { LuDot } from "react-icons/lu";
import button from'../assets/Compra ahora.json';
import Lottie from 'lottie-react';


const InfoSection = () => {
  return (
    <section className="info-section">
      
      
      <div className="info-container">
       
        {/* Contenido principal */}
        <div className="info-content">
          {/* Lista de beneficios lado izquierdo */}
          
          <div className="benefits-list">
            <div className="header-badge">
              <span>CON NUESTRAS SOLUCIONES NFC,</span>
              <span className="highlight">TU INFORMACIÓN VA MÁS LEJOS.</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <LuDot className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  Compartir tu información profesional al instante, compatible con cualquier dispositivo.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <LuDot className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  Conectar con tus clientes desde WhatsApp, redes o portafolios digitales con un solo toque.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <LuDot className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  Mostrar tu ubicación, enlaces y contenido multimedia de forma centralizada y accesible.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <LuDot className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  Personalizar tu tarjeta o solución NFC con la identidad visual de tu marca.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <LuDot className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  Actualizar tu información en tiempo real, sin necesidad de impresiones físicas.
                </p>
              </div>
            </div>
            <a href=""><Lottie animationData={button} loop={true} className='button-animation' /></a>
            
          </div>

          {/* Imagen del teléfono lado derecho */}
          <div className="phone-showcase">
            <div className="phone-container">
              <img src='/img/bannerinfo.png' alt="NFC Mobile App" className="phone-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
