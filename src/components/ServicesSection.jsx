import './ServicesSection.css';
import bgServices from '../assets/background/bg-services.jpg';
import iconoAsesoria from '../assets/img/icono-asesoria.jpg';
import iconoPersonaliza from '../assets/img/icono-personaliza.jpg';
import iconoTraza from '../assets/img/icono-traza.jpg';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-background">
        <img src={bgServices} alt="Background Services" className="bg-image" />
        <div className="services-overlay"></div>
      </div>
      
      <div className="services-container">
        {/* Texto principal */}
        <div className="services-header">
          <h2>
            Nuestros servicios se enfocan en <span className="highlight-text">tres pilares esenciales</span>
            <br />
            para transformar tu forma de conectar con clientes
            <br />
            y equipos: <span className="services-pillars">asesoría, personalización y trazabilidad.</span>
          </h2>
        </div>

        {/* Contenedor de servicios */}
        <div className="services-grid">
          {/* Servicio 1: Asesoría Estratégica */}
          <div className="service-item">
            <div className="service-icon">
              <img src={iconoAsesoria} alt="Asesoría Estratégica" />
            </div>
            <div className="service-content">
              <h3>Asesoría</h3>
              <h4>Estratégica</h4>
            </div>
          </div>

          {/* Servicio 2: Personalización Total */}
          <div className="service-item">
            <div className="service-icon">
              <img src={iconoPersonaliza} alt="Personalización Total" />
            </div>
            <div className="service-content">
              <h3>Personalización</h3>
              <h4>Total</h4>
            </div>
          </div>

          {/* Servicio 3: Trazabilidad y Optimización */}
          <div className="service-item">
            <div className="service-icon">
              <img src={iconoTraza} alt="Trazabilidad y Optimización" />
            </div>
            <div className="service-content">
              <h3>Trazabilidad y</h3>
              <h4>Optimización</h4>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="decorative-elements">
          <div className="tech-pattern pattern-left"></div>
          <div className="tech-pattern pattern-right"></div>
          <div className="circle-decoration circle-top-left"></div>
          <div className="circle-decoration circle-top-right"></div>
          <div className="circle-decoration circle-bottom-left"></div>
          <div className="cross-element cross-top"></div>
          <div className="cross-element cross-bottom"></div>
          <div className="cross-element cross-left"></div>
          <div className="cross-element cross-right"></div>
          <div className="line-decoration line-top"></div>
          <div className="line-decoration line-bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
