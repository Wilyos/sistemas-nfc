import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalizaTarjeta from './pages/PersonalizaTarjeta';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/personaliza-tarjeta" element={<PersonalizaTarjeta />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
