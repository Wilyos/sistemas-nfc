import './InfoSection.css';
import { LuDot } from "react-icons/lu";
import button from'../assets/Compra ahora.json';
import Lottie from 'lottie-react';


const InfoSection = () => {
  // Agrega la función para el evento de contacto
  const handleContactPixel = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact');
    }
  };

  return (
    <section className="info-section">
      
      
      <div className="info-container">
       
        {/* Contenido principal */}
        <div className="info-content">
          {/* Lista de beneficios lado izquierdo */}
          
          {/* Lista de beneficios: versión resumida en móviles */}
          <div className="benefits-list benefits-list-desktop">
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
            <a href="https://wa.me/573116111687"><Lottie animationData={button} loop={true} className='button-animation' /></a>
          </div>
          <div className="benefits-list benefits-list-mobile">
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
                  Compartir tu información profesional al instante.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <LuDot className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  Conectar con tus clientes desde con un solo toque.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <LuDot className='icon-info' />
              </div>
              <div className="benefit-text">
                <p>
                  Mostrar tu ubicación, enlaces y contenido multimedia.
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
                  Actualizar tu información en tiempo real.
                </p>
              </div>
              
            </div>
            <div className="benefit-item"> 
              <a className='button-benefit' href="https://wa.me/573116111687" target='_blank' onClick={handleContactPixel}><Lottie animationData={button} loop={true} className='button-animation' /></a>
            </div>  
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
