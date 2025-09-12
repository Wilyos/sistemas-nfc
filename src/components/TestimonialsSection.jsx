import React, { useEffect, useState } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'María G.',
    role: 'Emprendedora',
    quote: 'La tarjeta NFC me ahorra tiempo en ferias. Escanean y listo, quedo en sus contactos con mi portafolio.'
  },
  {
    id: 2,
    name: 'Carlos R.',
    role: 'Consultor',
    quote: 'Me encantó poder actualizar mis datos sin reimprimir. La interfaz es muy intuitiva y se ve profesional.'
  },
  {
    id: 3,
    name: 'Ana P.',
    role: 'Creadora de contenido',
    quote: 'Mis enlaces a redes y Whatsapp a un toque. He incrementado mis colaboraciones gracias a la tarjeta.'
  }
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <header className="testimonials-header">
          <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>
          <p className="testimonials-subtitle">Casos reales de uso en networking, empresas y marcas personales.</p>
        </header>

        <div className="testimonials-carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((t) => (
              <blockquote key={t.id} className="testimonial-card">
                <p className="quote">“{t.quote}”</p>
                <footer className="author">{t.name} • {t.role}</footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="indicators">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
