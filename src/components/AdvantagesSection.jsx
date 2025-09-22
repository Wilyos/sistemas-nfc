import React, { useState, useEffect } from 'react';
import './AdvantagesSection.css';

import { Link } from 'react-router-dom';


const advantages = [
  {
    number: '1.',
    title: 'CONEXIÓN INMEDIATA CON TUS CLIENTES',
    desc: 'Facilita el primer contacto sin fricciones: un solo toque basta para compartir tu información clave.'
  },
  {
    number: '2.',
    title: 'MEJORA TU PRESENCIA PROFESIONAL',
    desc: 'Presenta tu marca de forma moderna, personalizada y coherente con tu identidad visual.'
  },
  {
    number: '3.',
    title: 'ACTUALIZACIÓN INSTANTÁNEA DE TU INFORMACIÓN',
    desc: 'Con NFC, mantén tus datos siempre al día sin complicaciones. Un solo toque basta para actualizar tu información digital en tiempo real.'
  },
  {
    number: '4.',
    title: 'TECNOLOGÍA SIN COMPLICACIONES',
    desc: 'No necesitas apps ni instalaciones. Funciona con cualquier smartphone y sistema operativo.'
  },
  {
    number: '5.',
    title: 'VERSATILIDAD PARA CUALQUIER SECTOR',
    desc: 'Ideal para ventas, eventos, atención al cliente, recursos humanos, networking, y más.'
  }
];

const AdvantagesSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % advantages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Detectar mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="advantages-section" style={{position: 'relative', overflow: 'hidden'}}>
      <div
        className="advantages-bg-image"
        style={{
          backgroundImage: "url('/assets/banners/hero2.png')",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          opacity: 0.32
        }}
      />
      <div className="advantages-container" style={{position: 'relative', zIndex: 1}}>
        <h2 className="section-title">¿POR QUÉ ELEGIR SISTEMAS NFC PARA TU NEGOCIO?</h2>
        {isMobile ? (
          <div className="advantages-cards-carousel">
            <div className="advantage-card">
              <div className="advantage-header">
                <div className="advantage-number">{advantages[current].number}</div>
                <div className="advantage-titles">
                  <div className="advantage-title">{advantages[current].title}</div>
                </div>
              </div>
              <div className="advantage-description">{advantages[current].desc}</div>
            </div>
            <div className="advantages-carousel-dots">
              {advantages.map((_, idx) => (
                <span
                  key={idx}
                  className={`advantages-carousel-dot${idx === current ? ' active' : ''}`}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="advantages-cards-row">
            {advantages.map((adv, idx) => (
              <div className="advantage-card" key={idx}>
                <div className="advantage-header">
                  <div className="advantage-number">{adv.number}</div>
                  <div className="advantage-titles">
                    <div className="advantage-title">{adv.title}</div>
                  </div>
                </div>
                <div className="advantage-description">{adv.desc}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Información adicional debajo del carousel */}
      <div className="advantages-info-extra">
        <h2 className="info-extra-title">CONECTA, COMPARTE Y CRECE CON SISTEMAS NFC</h2>
        <p className="info-extra-text">
          En SISTEMAS NFC ofrecemos soluciones digitales para emprendedores, marcas personales y empresas que buscan proyectarse con tecnología inteligente.
        </p>
        <p className="info-extra-text">
          Comparte tu información con una tarjeta personalizada, lista para enviar por QR, enlace o tecnología NFC. Incluye acceso directo a whatsapp, redes sociales, portafolio digital, ubicación y más.
        </p>
        <p className="info-extra-text">
          Todo con tu imagen de marca, editable en tiempo real y sin necesidad de imprimir.
        </p>
        <div className="info-extra-icons-row">
          <div className="info-extra-icon"><img src="/img/icono-moda.png" alt="Moda" /></div>
          <div className="info-extra-icon"><img src="/img/icono-educacion.png" alt="Educación" /></div>
          <div className="info-extra-icon"><img src="/img/icono-gastronomia.png" alt="Gastronomía" /></div>
          <div className="info-extra-icon"><img src="/img/icono-comercio.png" alt="Comercio" /></div>
          <div className="info-extra-icon"><img src="/img/icono-servicios-profesionales.png" alt="Servicios Profesionales" /></div>
          <div className="info-extra-icon"><img src="/img/icono-creadores-de-contenido.png" alt="Creadores de contenido" /></div>
          <div className="info-extra-icon"><img src="/img/icono-sectorhospitalario.png" alt="Sector hospitalario" /></div>
          <div className="info-extra-icon"><img src="/img/icono-networking.png" alt="Networking" /></div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
