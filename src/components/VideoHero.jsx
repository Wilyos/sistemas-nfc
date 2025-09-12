import './VideoHero.css';
import posterImg from '../assets/background/bg-video.jpg';

const VideoHero = () => {
  return (
    <section className="video-hero" aria-label="Presentación">
      <div className="video-bg">
  <video className="video" autoPlay muted loop playsInline poster={posterImg} preload="auto">
          {/* Local desde public/video/herovideo.mp4 */}
          <source src="/video/herovideo.mp4" type="video/mp4" />
          {/* Stock fallback (Coverr, libre de uso) */}
          <source src="https://cdn.coverr.co/videos/coverr-contactless-payment-using-a-mobile-phone-1608/1080p.mp4" type="video/mp4" />
        </video>
        <div className="overlay" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title"></h1>
        <p className="hero-subtitle">Bienvenido a la nueva era de la conexión</p>
        <div className="hero-ctas">
          <a className="cta-primary" href="#features">Ver cómo funciona</a>
          <a className="cta-secondary" href="https://wa.me/573116111687" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a>
        </div>
        <div className="hero-badges">
          <span>Sin apps</span>
          <span>Compatible iOS/Android</span>
          <span>Actualizable en tiempo real</span>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
