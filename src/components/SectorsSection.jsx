import React from 'react';
import './SectorsSection.css';

const showcaseItems = [
  {
    id: 'c1',
    title: 'Tarjeta Corporativa',
    subtitle: 'Diseño formal y elegante',
    img: '/plantillas/corporativas/C1.png',
    tag: 'Corporativa'
  },
  {
    id: 'c2',
    title: 'Corporativa Moderna',
    subtitle: 'Líneas limpias y profesionales',
    img: '/plantillas/corporativas/C2.png',
    tag: 'Corporativa'
  },
  {
    id: 'corp2',
    title: 'Corporativa Minimal',
    subtitle: 'Marca sólida y sobria',
    img: '/plantillas/corporativas/corporativa2.png',
    tag: 'Corporativa'
  },
  {
    id: 'a1',
    title: 'Creativa A1',
    subtitle: 'Colores vivos y atrevidos',
    img: '/plantillas/creativas/A1.png',
    tag: 'Creativa'
  },
  {
    id: 'a2',
    title: 'Creativa A2',
    subtitle: 'Estilo dinámico y fresco',
    img: '/plantillas/creativas/A2.png',
    tag: 'Creativa'
  },
  {
    id: 'e1',
    title: 'Creativa E1',
    subtitle: 'Composición artística',
    img: '/plantillas/creativas/E1.png',
    tag: 'Creativa'
  },
  {
    id: 'b1',
    title: 'Minimalista B1',
    subtitle: 'Simplicidad que impacta',
    img: '/plantillas/minimalistas/B1.png',
    tag: 'Minimalista'
  },
  {
    id: 'b2',
    title: 'Minimalista B2',
    subtitle: 'Elegancia esencial',
    img: '/plantillas/minimalistas/B2.png',
    tag: 'Minimalista'
  }
];

const SectorsSection = () => {
  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <header className="showcase-header">
          <h2 className="showcase-title">Explora ejemplos de tarjetas</h2>
          <p className="showcase-subtitle">
            Inspírate con diseños listos para usar. Personaliza colores, logos y enlaces en minutos.
          </p>
        </header>

        <div className="showcase-grid">
          {showcaseItems.map((item) => (
            <article key={item.id} className="showcase-card">
              <div className="card-media">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="card-overlay">
                  <button className="card-cta" type="button">Ver ejemplo</button>
                </div>
                <span className="card-tag">{item.tag}</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-subtitle">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
