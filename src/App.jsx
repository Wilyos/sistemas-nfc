import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import VideoSection from './components/VideoSection'
import ServicesSection from './components/ServicesSection'
import InfoSection from './components/InfoSection'
import AdvantagesSection from './components/AdvantagesSection'
import SectorsSection from './components/SectorsSection'
import FooterSection from './components/FooterSection'
import SectionSeparator from './components/SectionSeparator'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionSeparator />
      <VideoSection />
      <SectionSeparator />
      <ServicesSection />
      <SectionSeparator />
      <InfoSection />
      <SectionSeparator />
      <AdvantagesSection />
      <SectionSeparator />
      <SectorsSection />
      <SectionSeparator />
      <FooterSection />
    </>
  )
}

export default App
