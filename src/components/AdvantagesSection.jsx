import React, { useState, useEffect } from 'react';
import './AdvantagesSection.css';
import bgFive from '../assets/background/bg-five.jpg';
import arrowImg from '../assets/img/arrow.png';
import cardImg from '../assets/img/card.png';
import phone2Img from '../assets/img/phone2.png';
import logoSistemas from '../assets/img/logo-sistemas.png';
import logoNfc from '../assets/img/logo-nfc.png';
import { Link } from 'react-router-dom';

const AdvantagesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const advantages = [
    {
      number: "1.",
      title: "CONEXIÓN INMEDIATA",
      subtitle: "CON TUS CLIENTES",
      description: "Facilita el primer contacto sin fricciones: un solo toque basta para compartir tu información clave."
    },
    {
      number: "2.",
      title: "MEJORA TU PRESENCIA",
      subtitle: "PROFESIONAL",
      description: "Presenta tu marca de forma moderna, personalizada y coherente con tu identidad visual."
    },
    {
      number: "3.",
      title: "REDUCCIÓN DE COSTOS",
      subtitle: "OPERATIVOS",
      description: "Olvídate de las reimpresiones. Con NFC actualizas tu información digital en tiempo real."
    },
    {
      number: "4.",
      title: "TECNOLOGÍA SIN ",
      subtitle: "COMPLICACIONES",
      description: "no necesitas apps ni instalaciones. Funciona con cualquier smarthphone y sistema operativo."
    },
     {
      number: "5.",
      title: "VERSATILIDAD PARA ",
      subtitle: "CUALQUIER SECTOR",
      description: "Ideal para ventas, eventos, atención al cliente, recursos humanos, networking y más."
    }
  ];

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (isMobile) {
          // En móvil, rotar entre 0-4 (todas las tarjetas)
          return prev === advantages.length - 1 ? 0 : prev + 1;
        } else {
          // En desktop, rotar entre 0-2 (bloques de 3)
          return prev === 2 ? 0 : prev + 1;
        }
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile, advantages.length]);

  return (
    <section className="advantages-section">
      {/* Fondo de la sección */}
      <div className="advantages-background">
        <img src={bgFive} alt="Background" className="bg-image" />
        <div className="advantages-overlay"></div>
      </div>

      {/* Contenedor principal */}
      <div className="advantages-container">
        {/* Título superior */}
        <div className="section-title">
          <h2>¿POR QUÉ ELEGIR SISTEMAS NFC PARA TU NEGOCIO?</h2>
        </div>

        {/* Carrusel de ventajas */}
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={
              isMobile
                ? { width: '100%', display: 'flex', transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)', transform: `translateX(-${currentSlide * 100}%)` }
                : { transform: `translateX(-${currentSlide * 33.333}%)` }
            }
          >
            {isMobile
              ? advantages.map((advantage, index) => (
                  <div key={index} className="advantage-card" style={{ minWidth: '100%', maxWidth: '100%' }}>
                    <div className="advantage-header">
                      <div className="advantage-number">{advantage.number}</div>
                      <div className="advantage-titles">
                        <h3 className="advantage-title">{advantage.title}</h3>
                        <h4 className="advantage-subtitle">{advantage.subtitle}</h4>
                      </div>
                    </div>
                    <div className="advantage-content">
                      <p className="advantage-description">{advantage.description}</p>
                    </div>
                  </div>
                ))
              : advantages.map((advantage, index) => (
                  <div key={index} className="advantage-card">
                    <div className="advantage-header">
                      <div className="advantage-number">{advantage.number}</div>
                      <div className="advantage-titles">
                        <h3 className="advantage-title">{advantage.title}</h3>
                        <h4 className="advantage-subtitle">{advantage.subtitle}</h4>
                      </div>
                    </div>
                    <div className="advantage-content">
                      <p className="advantage-description">{advantage.description}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className="carousel-indicators">
          {isMobile
            ? advantages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : [0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
        </div>

        {/* Contenido principal con logo y descripción */}
        <div className="main-content">
          <div className="content-text">
            <div className="logo-section">
              <div className="logo-images">
                <img src={logoNfc} alt="NFC" className="logo-nfc" />
              </div>
            </div>
            
            <div className="description-blocks">
              <p className="description-primary">
                Con <strong>Sistemas NFC</strong> recibes una tarjeta inteligente personalizada con tu <strong>logo, 
                nombre, cargo y colores corporativos</strong>, lista para representar tu marca de forma 
                moderna y eficaz.
              </p>
              
              <p className="description-secondary">
                Además, obtienes una <strong>URL profesional, código QR y tarjeta NFC física</strong> para 
                compartir tu información de manera ilimitada con clientes y contactos.
              </p>
              
              <p className="description-features">
                Integra botones directos a llamada, WhatsApp con mensaje personalizado, 
                correo electrónico, redes sociales, ubicación en Google Maps y más.
              </p>
              
              <p className="description-updates">
                Actualiza tu información en cualquier momento, sin necesidad de volver a 
                imprimir ni hacer instalaciones.
              </p>
              
              <p className="description-final">
                <strong>Todo adaptado a tus necesidades y alineado con tu identidad visual.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Sección de demo */}
        <div className="demo-section">
          <div className="demo-content">
            <div className="demo-text">
              <h3>DESCUBRE CÓMO SE VE TU NUEVA FORMA DE CONECTAR.</h3>

            </div>
            
            <div className="demo-bottom">
              
             
              
              <div className="demo-images">
                <div className="column-demo">
                  <div className="image-item arrow-image">
                    <img src={arrowImg} alt="Arrow" />
                  </div>
                   <Link to="/personaliza-tarjeta" className="demo-button">
                    EXPLORA<br />LA DEMO
                  </Link>
                </div>
                <div className="image-item card-image">
                  <img src={cardImg} alt="NFC Card" />
                </div>
                <div className="image-item phone-image">
                  <img src={phone2Img} alt="Phone Demo" />
                </div>
              </div>
            </div>
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
    </section>
  );
};

export default AdvantagesSection;
