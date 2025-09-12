import './FeaturesSection.css';
import networking from '../assets/img/networking.png';
import comercio from '../assets/img/commerce.png';
import phone from '../assets/img/contenido.png';
import qr from '../assets/img/maletin.png';
import feature1 from '../assets/img/feature1.png';
import feature2 from '../assets/img/feature2.png';
import feature3 from '../assets/img/feature3.png';
import feature4 from '../assets/img/feature4.png';

const features = [
  { icon: networking, bg: feature1 },
  { icon: comercio, bg: feature2 },
  { icon: phone, bg: feature3 },
  { icon: qr, bg: feature4 },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <header className="features-header">
          <h2>Todo lo que necesitas en una tarjeta</h2>
          <p>Simple, personalizable y siempre actualizada</p>
        </header>
        <div className="features-grid">
          {features.map((f, i) => (
            <div
              className="feature-card"
              key={i}
              style={{ '--bg': `url(${f.bg})` }}
            >
              <div className="feature-bg" aria-hidden="true" />
              <img className="feature-icon" src={f.icon} alt="feature icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
