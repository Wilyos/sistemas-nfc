
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import hero1Webp from '../assets/banners/hero1.webp';
import hero1Png from '../assets/banners/hero1.png';
import hero2Webp from '../assets/banners/hero2.webp';
import hero2Png from '../assets/banners/hero2.png';
import hero3Webp from '../assets/banners/hero3.webp';
import hero3Png from '../assets/banners/hero3.png';

const slides = [
  {
    webp: hero3Webp,
    png: hero3Png,
    topTitle: 'BIENVENIDO A LA NUEVA ERA DE LA CONEXIÓN',
    mainText: 'DISEÑAMOS MÁS QUE IMPRESIONES,',
    mainText2: 'CREAMOS CONEXIONES',
    cta: '¡COMPRA AHORA!'
  },
  {
    webp: hero2Webp,
    png: hero2Png,
    topTitle: 'BIENVENIDO A LA NUEVA ERA DE LA CONEXIÓN',
    mainText: 'TRANSFORMA EL PRIMER CONTACTO',
    mainText2: 'EN UNA EXPERIENCIA MEMORABLE',
    cta: '¡COMPRA AHORA!'
  },
  {
    webp: hero1Webp,
    png: hero1Png,
    topTitle: 'BIENVENIDO A LA NUEVA ERA DE LA CONEXIÓN',
    mainText: 'COMO UN VERDADERO PROFESIONAL',
    mainText2: '',
    cta: '¡COMPRA AHORA!'
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
    const timer = setTimeout(() => setAnim(false), 5000);
    return () => clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 16000); // 32 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-carousel">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide${idx === current ? ' active' : ''}`}
          >
            {/* Imagen de fondo con soporte WebP + fallback PNG */}
            <picture>
              <source srcSet={slide.webp} type="image/webp" />
              <img
                src={slide.png}
                alt={slide.topTitle}
                className="hero-slide-bg-img"
                loading={idx === 0 ? 'eager' : 'lazy'}
                fetchPriority={idx === 0 ? 'high' : 'low'}
                decoding={idx === 0 ? 'sync' : 'async'}
              />
            </picture>

            {idx === current && (
              <>
                {/* Título superior */}
                <div className={`hero-slide-top-title${anim ? ' anim' : ''}`}>{slide.topTitle}</div>
                
                {/* Contenido inferior izquierdo */}
                <div className={`hero-slide-bottom-content${anim ? ' anim' : ''}`}>
                  <div className="hero-slide-main-text">{slide.mainText}</div>
                  {slide.mainText2 && <div className="hero-slide-main-text2">{slide.mainText2}</div>}
                </div>

                {/* Contenido inferior derecho: Botón CTA y Puntos Físicos */}
                <div className={`hero-slide-right-content${anim ? ' anim' : ''}`}>
                  <a
                    href="https://wa.me/573116111687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-cta-btn-white"
                  >
                    {slide.cta}
                  </a>
                  <a
                    href="https://maps.app.goo.gl/ZdkkYM4CkgKZbmxi6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-points-badge"
                  >
                    <FaMapMarkerAlt className="hero-points-icon" />
                    <span>5 puntos físicos</span>
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
        <div className="hero-carousel-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot${idx === current ? ' active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
