import React from 'react';
import './HeroSection.css';
import heroBackground from '../assets/background/hero-section-banner.png';
import bgFour from '../assets/background/bg-four.png';
import telephoneImg from '../assets/img/telephone.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Banner desktop */}
      <div className="hero-background">
        <img src={heroBackground} alt="Hero Background" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>

      {/* Banner móvil vertical */}
      <div 
        className="hero-mobile-banner"
        style={{
          background: ` url(${bgFour}) center/cover no-repeat`,
        }}
      >
        <div className="hero-mobile-content">
          <img 
            src={telephoneImg} 
            alt="Teléfono" 
            className="hero-mobile-img-telephone"
            style={{ width: 200, height: 200, margin: '0 auto 1.2rem auto', display: 'block', filter: 'drop-shadow(0 4px 16px #0006)' }}
          />
          <div className="hero-mobile-top">
            <div className="hero-mobile-subtitle">TECNOLOGÍA QUE CONECTA.</div>
            <div className="hero-mobile-headline">TRANSFORMA EL PRIMER CONTACTO EN UNA EXPERIENCIA MEMORABLE</div>
            <div className="hero-mobile-question">¿QUIERES CONECTAR DE UNA FORMA MÁS EFICIENTE CON TUS CLIENTES POTENCIALES?</div>
            <div className="hero-mobile-desc">Conecta, impacta y destaca como un verdadero profesional.</div>
          </div>
          <a
            href="https://wa.me/573116111687"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-mobile-cta"
          >
            ¡COMPRA AHORA!
          </a>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-cta-container hide-on-mobile">
            <a
              href="https://wa.me/573116111687"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-button"
            >
              ¡COMPRA AHORA!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
