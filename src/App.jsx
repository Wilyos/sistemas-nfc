import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import InfoSection from './components/InfoSection'
import AdvantagesSection from './components/AdvantagesSection'
import SectorsSection from './components/SectorsSection'
import FooterSection from './components/FooterSection'
import Loader from './components/Loader'
import SidebarMenu from './components/SidebarMenu'
import hero1 from './assets/banners/hero1.png';
import hero2 from './assets/banners/hero2.png';
import hero3 from './assets/banners/hero3.png';
import './App.css'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Precargar imágenes del carrusel
    const images = [hero1, hero2, hero3];
    let loaded = 0;
    images.forEach(src => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === images.length) setLoading(false);
      };
    });
  }, []);

    if (loading) return <Loader />;

  return (
    <>
      <Navbar />
        <SidebarMenu />
      <HeroSection />
      <ServicesSection />
      <InfoSection />
      <SectorsSection />
      <AdvantagesSection />
      <FooterSection />
    </>
  );
}

export default App
