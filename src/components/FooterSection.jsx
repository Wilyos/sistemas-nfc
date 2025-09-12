import React from 'react';
import './FooterSection.css';
import bgSeven from '../assets/background/bg-seven.jpg';
import { FaWhatsapp } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import qrWhatsappGreen from '../assets/img/qr_whatsapp_green_bg.png'; // Importa la imagen QR

const FooterSection = () => {
  const contactCards = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: (
        <FaWhatsapp className="contact-icon" />
      ),
      description: 'Ayudarte ahora es más fácil a través de nuestro canal de WhatsApp',
      qrText: 'Escanea para ingresar',
      qrNote: 'O',
      buttonText: 'CHATEA AQUÍ',
      buttonLink: 'https://wa.me/573116111687'
    },
    {
      id: 'location',
      title: 'Visítanos',
      icon: (
        <FaMapMarkerAlt className="contact-icon" />   
      ),
      description: 'Visítanos y conoce todo lo que podemos hacer por tu marca.',
      buttonText: 'UBICACIÓN OFICINAS',
      buttonLink: 'https://maps.app.goo.gl/ZdkkYM4CkgKZbmxi6',
    },
    {
      id: 'email',
      title: 'Envía un correo electrónico',
      icon: (
        <MdMail className='contact-icon' />
      ),
      description: 'Escríbenos tus consultas sobre nuestros sistemas, productos o servicios, y nuestro equipo de',
      highlight: 'Sistemas NFC',
      additionalText: 'estará listo para ayudarte.',
      buttonText: 'ENVÍA UN CORREO',
      buttonLink: 'mailto:Ssanchez@sistemaslitograficos.com'
    }
  ];

  return (
    <footer className="footer-section">
      {/* Fondo de la sección */}
      <div className="footer-background">
        <img src={bgSeven} alt="Background" className="bg-image" />
        <div className="footer-overlay"></div>
      </div>

      {/* Contenedor principal */}
      <div className="footer-container">
        {/* Título principal */}
        <div className="footer-header">
          <h2 className="footer-title">
            <span className="highlight-text">Nos encantaría</span> ser tu aliado estratégico y mantenerte actualizado con 
            nuestras novedades, soluciones y ofertas exclusivas.
          </h2>
        </div>

        {/* Tarjetas de contacto */}
        <div className="contact-cards">
          {contactCards.map((card) => (
            <div key={card.id} className={`contact-card ${card.id}-card`}>
              <div className="card-header">
                <h3 className="footer-card-title">{card.title}</h3>
                <div className="icon-container">
                  {card.icon}
                </div>
              </div>

              <div className="card-content">
                <p className="card-description">
                  {card.description}
                  {card.highlight && (
                    <>
                      {' '}<span className="highlight-text">{card.highlight}</span>{' '}
                      {card.additionalText}
                    </>
                  )}
                </p>

                {/* QR Section for WhatsApp */}
                {card.id === 'whatsapp' && (
                  <div className="qr-section">
                    <div className="qr-placeholder">
                      <span className="qr-text">
                        <img 
                          src={qrWhatsappGreen} 
                          alt="QR WhatsApp" 
                          style={{ width: '100px', height: '100px', objectFit: 'contain', borderRadius: '10px' }} 
                        />
                      </span>
                    </div>
                    <p className="qr-note">{card.qrText}</p>
                    <p className="qr-or">{card.qrNote}</p>
                  </div>
                )}
                 {/* Mapa para la tarjeta de ubicación */}
                  {card.id === 'location' && (
                    <div className="map-section">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.0343114602529!2d-75.57016113241124!3d6.25468981752508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442943e4f17211%3A0x849dd7e492aef013!2sSistemas%20Litogr%C3%A1ficos!5e0!3m2!1ses-419!2sco!4v1755096891712!5m2!1ses-419!2sco"
                        width="100%"
                        height="120"
                        style={{ border: 0, borderRadius: '10px', margin: '1rem 0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Sistemas Litográficos"
                      ></iframe>
                    </div>
                  )}
              </div>

              <div className="card-footer">
                <a 
                  href={card.buttonLink} 
                  className="contact-button"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {card.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Sistemas NFC. Todos los derechos reservados.
          </p>
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
    </footer>
  );
};

export default FooterSection;
