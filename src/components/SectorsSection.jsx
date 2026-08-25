import React, { useState, useEffect } from 'react';
import banner1 from '../assets/profiles/Screenshot_1.png';
import banner2 from '../assets/profiles/Screenshot_2.png';
import banner3 from '../assets/profiles/Screenshot_4.png';
import banner4 from '../assets/profiles/Screenshot_5.png';
import './SectorsSection.css';

const banners = [
  { src: banner1, alt: 'banner1' },
  { src: banner2, alt: 'banner2' },
  { src: banner3, alt: 'banner3' },
  { src: banner4, alt: 'banner4' },
];

const SectorsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="sectors-section">
      <div className="sector-content">
        <div className="sector-card">
          <h2 className="sector-title">TU CARTA DE <br /> PRESENTACIÓN DIGITAL</h2>
          <p className="sector-desc">
            <i>
              Obtén tu tarjeta NFC y accede a una landing page (pagina de aterrizaje) personalizada donde podrás mostrar tu portafolio, compartir tu información de contacto y conectar de forma directa con tus clientes. Una forma moderna y profesional de causar una gran primera impresión.
            </i>
          </p>
        </div>
        {isMobile ? (
          <div className="sector-banners-carousel">
            {/* Imagen previa (peek) */}
            <img
              src={banners[(current - 1 + banners.length) % banners.length].src}
              alt={banners[(current - 1 + banners.length) % banners.length].alt}
              className="sector-banner-carousel-img prev"
              style={{ left: 0 }}
            />
            {/* Imagen actual */}
            <img
              src={banners[current].src}
              alt={banners[current].alt}
              className="sector-banner-carousel-img"
              style={{ zIndex: 2 }}
            />
            {/* Imagen siguiente (peek) */}
            <img
              src={banners[(current + 1) % banners.length].src}
              alt={banners[(current + 1) % banners.length].alt}
              className="sector-banner-carousel-img next"
              style={{ right: 0 }}
            />
            <div className="sector-carousel-dots">
              {banners.map((_, idx) => (
                <span
                  key={idx}
                  className={`sector-carousel-dot${idx === current ? ' active' : ''}`}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="sector-banners">
            <img src={banner1} alt="banner1" className="sector-banner banner-top" />
            <img src={banner2} alt="banner2" className="sector-banner banner-mid" />
            <img src={banner3} alt="banner3" className="sector-banner banner-bot" />
            <img src={banner4} alt="banner4" className="sector-banner banner-front" />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectorsSection;
