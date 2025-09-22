
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import hero1 from '../assets/banners/hero1.png';
import hero2 from '../assets/banners/hero2.png';
import hero3 from '../assets/banners/hero3.png';

const slides = [
  {
    image: hero3,
    topTitle: 'BIENVENIDO A LA NUEVA ERA DE LA CONEXIÓN',
    mainText: 'DISEÑAMOS MÁS QUE IMPRESIONES,',
    mainText2: 'CREAMOS CONEXIONES',
    cta: '¡COMPRA AHORA!'
  },
  {
    image: hero2,
    topTitle: 'BIENVENIDO A LA NUEVA ERA DE LA CONEXIÓN',
    mainText: 'TRANSFORMA EL PRIMER CONTACTO',
    mainText2: 'EN UNA EXPERIENCIA MEMORABLE',
    cta: '¡COMPRA AHORA!'
  },
  {
    image: hero1,
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
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {idx === current && (
              <>
                {/* Título superior */}
                <div className={`hero-slide-top-title${anim ? ' anim' : ''}`}>{slide.topTitle}</div>
                {/* Contenido inferior izquierdo */}
                <div className={`hero-slide-bottom-content${anim ? ' anim' : ''}`}>
                  <div className="hero-slide-main-text">{slide.mainText}</div>
                  {slide.mainText2 && <div className="hero-slide-main-text2">{slide.mainText2}</div>}
                  <a
                    href="https://wa.me/573116111687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-cta-button"
                  >
                    {slide.cta}
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
