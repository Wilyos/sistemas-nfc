import React, { useState, useEffect } from 'react';
import banner1Webp from '../assets/profiles/Screenshot_1.webp';
import banner1Png from '../assets/profiles/Screenshot_1.png';
import banner2Webp from '../assets/profiles/Screenshot_2.webp';
import banner2Png from '../assets/profiles/Screenshot_2.png';
import banner3Webp from '../assets/profiles/Screenshot_4.webp';
import banner3Png from '../assets/profiles/Screenshot_4.png';
import banner4Webp from '../assets/profiles/Screenshot_5.webp';
import banner4Png from '../assets/profiles/Screenshot_5.png';
import './SectorsSection.css';

const banners = [
  { webp: banner1Webp, png: banner1Png, alt: 'banner1' },
  { webp: banner2Webp, png: banner2Png, alt: 'banner2' },
  { webp: banner3Webp, png: banner3Png, alt: 'banner3' },
  { webp: banner4Webp, png: banner4Png, alt: 'banner4' },
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
            <picture>
              <source srcSet={banners[(current - 1 + banners.length) % banners.length].webp} type="image/webp" />
              <img
                src={banners[(current - 1 + banners.length) % banners.length].png}
                alt={banners[(current - 1 + banners.length) % banners.length].alt}
                className="sector-banner-carousel-img prev"
                style={{ left: 0 }}
                loading="lazy" decoding="async"
              />
            </picture>
            {/* Imagen actual */}
            <picture>
              <source srcSet={banners[current].webp} type="image/webp" />
              <img
                src={banners[current].png}
                alt={banners[current].alt}
                className="sector-banner-carousel-img"
                style={{ zIndex: 2 }}
                loading="lazy" decoding="async"
              />
            </picture>
            {/* Imagen siguiente (peek) */}
            <picture>
              <source srcSet={banners[(current + 1) % banners.length].webp} type="image/webp" />
              <img
                src={banners[(current + 1) % banners.length].png}
                alt={banners[(current + 1) % banners.length].alt}
                className="sector-banner-carousel-img next"
                style={{ right: 0 }}
                loading="lazy" decoding="async"
              />
            </picture>
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
            <picture><source srcSet={banner1Webp} type="image/webp" /><img src={banner1Png} alt="banner1" className="sector-banner banner-top" loading="lazy" decoding="async" /></picture>
            <picture><source srcSet={banner2Webp} type="image/webp" /><img src={banner2Png} alt="banner2" className="sector-banner banner-mid" loading="lazy" decoding="async" /></picture>
            <picture><source srcSet={banner3Webp} type="image/webp" /><img src={banner3Png} alt="banner3" className="sector-banner banner-bot" loading="lazy" decoding="async" /></picture>
            <picture><source srcSet={banner4Webp} type="image/webp" /><img src={banner4Png} alt="banner4" className="sector-banner banner-front" loading="lazy" decoding="async" /></picture>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectorsSection;
