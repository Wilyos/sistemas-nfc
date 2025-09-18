import './SplitFeatureSection.css';
import { Link } from 'react-router-dom';
import phoneImg from '../assets/img/telephone.png';

const SplitFeatureSection = () => {
  return (
    <section className="split-feature">
      <div className="split-container">
        <div className="split-left">
          <span className="eyebrow">ULTIMATE</span>
          <h2>Una tarjeta. Comparte todo.</h2>
          <p className="lead">
            Con nuestra tarjeta inteligente NFC puedes compartir tu perfil, redes y enlaces
            con un solo toque. Cambia lo que compartes cuando quieras, sin reimprimir.
          </p>

          <ul className="feature-list">
            <li>
              <strong>Mini‑sitio de perfil</strong>
              <p>Comparte tu contacto, perfil digital, redes sociales y más.</p>
            </li>
            <li>
              <strong>WhatsApp directo</strong>
              <p>Escanea la tarjeta y abre una conversación al instante.</p>
            </li>
            <li>
              <strong>Perfiles sociales</strong>
              <p>Comparte tu LinkedIn, Instagram, YouTube y más con un toque.</p>
            </li>
            <li>
              <strong>Cualquier enlace</strong>
              <p>Redirige tu tarjeta a cualquier web, archivo o ubicación.</p>
            </li>
          </ul>

          <Link to="/personaliza-tarjeta" className="split-cta">Diseña la tuya</Link>
        </div>

        <div className="split-right">
          <img src={phoneImg} alt="Teléfono mostrando tarjeta NFC" />
        </div>
      </div>
    </section>
  );
};

export default SplitFeatureSection;
