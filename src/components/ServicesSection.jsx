import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';
import banner from '../assets/banners/bannerinfo.png';
import banner2 from '../assets/banners/bannerinfo2.png';


const banners =[
  {image: banner,
   title: 'En Sistemas NFC, potenciamos la forma en que te conectas con clientes y equipos, transformando el contacto convencional en experiencias inteligentes',
   description: 'Ya sea B2B o B2C, ayudamos a empresas, marcas y profesionales a integrar tecnología NFC para compartir información de manera rápida, efectiva y siempre actualizada.'
  },
  {image: banner2,
   title: 'En Sistemas NFC, potenciamos la forma en que te conectas con clientes y equipos, transformando el contacto convencional en experiencias inteligentes',
   description: 'Ya sea B2B o B2C, ayudamos a empresas, marcas y profesionales a integrar tecnología NFC para compartir información de manera rápida, efectiva y siempre actualizada.'
  }
]


const ServicesSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleViewContentPixel = () => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent');
    }
  };

  return (
    <section className="services-section">
      <div className="services-top">
        <div className="services-header">
          <p className="services-description">
            Nuestros servicios se enfocan en tres pilares esenciales para transformar tu forma de conectar con clientes y equipos, <br />
            <span className="services-highlight">asesoría, personalización y trazabilidad</span>
          </p>
        </div>
        <div className="services-pillars">
          <div className="pillar">
            <div className="pillar-icon">
              {/* Icono de asesoría (ejemplo: chat) */}
              <img src="/img/icono1.png" alt="chat" />
            </div>
            <div className="pillar-title">Asesoría Estratégica</div>
          </div>
          <div className="pillar">
            <div className="pillar-icon">
              {/* Icono de personalización (ejemplo: lápiz) */}
              <img src="/img/icono2.png" alt="lapiz" />
            </div>
            <div className="pillar-title">Personalización Total</div>
          </div>
          <div className="pillar">
            <div className="pillar-icon">
              {/* Icono de trazabilidad (ejemplo: tracking) */}
              <img src="/img/icono3.png" alt="tracking" />
            </div>
            <div className="pillar-title">Trazabilidad y Optimización</div>
          </div>
        </div>
      </div>

      <div className='video-container'>
        <video
          src="/video/vidinfo.mp4"
          autoPlay
          loop
          muted
          playsInline
          
        >
          Tu navegador no soporta el video.
        </video>
      </div>

      <div  className="banner-container" >
        <div  className="banner">
          <img
            src={banners[current].image}
            alt={banners[current].title}
            className='banner-image'
          />
          {/* Overlay de texto */}
          <div className="banner-overlay">
            <h2 >{banners[current].title}</h2>
            <p>{banners[current].description}</p>
            <Link to="/personaliza-tarjeta" className="banner-link" onClick={handleViewContentPixel}>
              PERSONALÍZALAS ¡AQUÍ!
            </Link>
          </div>
          {/* Dots de slide */}
          <div className="banner-dots" >
            {banners.map((_, idx) => (
              <span
                key={idx}
                className={`banner-dot${idx === current ? ' active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;
