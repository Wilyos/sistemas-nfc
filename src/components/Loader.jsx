import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-spinner"></div>
    <span className="loader-text">Cargando...</span>
  </div>
);

export default Loader;
