

import './Navbar.css';

import logoNFC from '../assets/img/newlogonfc.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar--minimal">
      <div className="navbar-minimal-container">
        {/* Icono de búsqueda a la izquierda */}
        <div className="navbar-icon navbar-icon--left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Logo centrado con imágenes */}
        <div className="navbar-logo-center">
          
          <img src={logoNFC} alt="Logo NFC" className="logo-img-nfc" />
        </div>

        {/* Icono de carrito a la derecha */}
        <div className="navbar-icon navbar-icon--right">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
