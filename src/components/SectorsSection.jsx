import React from 'react';
import './SectorsSection.css';
import bgSix from '../assets/background/bg-six.jpg';
import iconoModa from '../assets/img/fashion.png';
import education from '../assets/img/education.png';
import gastronomia from '../assets/img/gastronomia.png'
import commerce from '../assets/img/commerce.png';
import bussiness from '../assets/img/maletin.png';
import networking from '../assets/img/networking.png';
import hospital from '../assets/img/hospital.png';
import contenido from '../assets/img/contenido.png';


const SectorsSection = () => {
  const sectors = [
    {
      id: 'moda',
      title: 'Moda',
      icon: (
        <img src={iconoModa} alt="Icono de Moda" className='sector-icon'/>
      )
    },
    {
      id: 'educacion',
      title: 'Educación',
      icon: (
        <img src={education} alt="Icono de Educación" className='sector-icon'/>
      )
    },
    {
      id: 'gastronomia',
      title: 'Gastronomía',
      icon: (
        <img src={gastronomia} alt="Icono de Gastronomía" className='sector-icon'/>
      )
    },
    {
      id: 'comercio',
      title: 'Comercio',
      icon: (
        <img src={commerce} alt="Icono de Comercio" className='sector-icon'/>
      )
    },
    {
      id: 'servicios',
      title: 'Servicios profesionales',
      icon: (
       <img src={bussiness} alt="Icono de Servicios Profesionales" className='sector-icon'/>
      )
    },
    {
      id: 'networking',
      title: 'Networking',
      icon: (
        <img src={networking} alt="Icono de Networking" className='sector-icon'/>
      )
    },
    {
      id: 'hospitalario',
      title: 'Sector hospitalario',
      icon: (
        <img src={hospital} alt="Icono de Sector Hospitalario" className='sector-icon'/>
      )
    },
    {
      id: 'creadores',
      title: 'Creadores de contenido',
      icon: (
         <img src={contenido} alt="Icono de Creadores de Contenido" className='sector-icon'/>
      )
    }
  ];

  return (
    <section className="sectors-section">
      {/* Fondo de la sección */}
      <div className="sectors-background">
        <img src={bgSix} alt="Background" className="bg-image" />
        <div className="sectors-overlay"></div>
      </div>

      {/* Contenedor principal */}
      <div className="sectors-container">
        {/* Título principal */}
        <div className="section-header">
          <h2 className="main-title">
            CONECTA, COMPARTE Y CRECE CON 
            <span className="highlight-text"> SISTEMAS NFC</span>
          </h2>
        </div>

        {/* Descripción */}
        <div className="description-section">
          <p className="description-text">
            En <strong>SISTEMAS NFC</strong> ofrecemos soluciones digitales para emprendedores, marcas personales y empresas que 
            buscan proyectarse con tecnología inteligente.
          </p>
          
          <p className="features-text">
            Comparte tu información con una tarjeta personalizada, lista para <strong>enviar por QR, enlace o tecnología NFC</strong>. 
            Incluye acceso directo a <strong>whatsapp, redes sociales, portafolio digital, ubicación y más</strong>.
          </p>
          
          <p className="final-text">
            Todo con tu imagen de marca, editable en tiempo real y sin necesidad de imprimir.
          </p>
        </div>

        {/* Grid de sectores */}
        <div className="sectors-grid">
          {sectors.map((sector) => (
            <div key={sector.id} className="sector-item">
              <div className="sector-icon-container">
                {sector.icon}
              </div>
              <h3 className="sector-title">{sector.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="decorative-elements">
        <div className="tech-grid grid-top-left"></div>
        <div className="tech-grid grid-bottom-right"></div>
        <div className="circle-element circle-small"></div>
        <div className="circle-element circle-medium"></div>
        <div className="circle-element circle-large"></div>
        <div className="line-element line-diagonal-1"></div>
        <div className="line-element line-diagonal-2"></div>
        <div className="pattern-overlay pattern-left"></div>
        <div className="pattern-overlay pattern-right"></div>
      </div>
    </section>
  );
};

export default SectorsSection;
