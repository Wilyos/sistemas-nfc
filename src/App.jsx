import React from 'react'
import Navbar from './components/Navbar'
import VideoHero from './components/VideoHero'
import FeaturesSection from './components/FeaturesSection'
import SplitFeatureSection from './components/SplitFeatureSection'
import TestimonialsSection from './components/TestimonialsSection'
// import VideoSection from './components/VideoSection'
// import ServicesSection from './components/ServicesSection'
// import InfoSection from './components/InfoSection'
// import AdvantagesSection from './components/AdvantagesSection'
import SectorsSection from './components/SectorsSection'
import FooterSection from './components/FooterSection'
import SectionSeparator from './components/SectionSeparator'
import './App.css'

function App() {
  return (
    <>
  <Navbar />
  <VideoHero />
    <SectionSeparator from="#0a0a0a" to="#111111" />
  <FeaturesSection />
  <SplitFeatureSection />
  <SectionSeparator from="#111111" to="#0d0d0d" />
  <SectorsSection />
  <SectionSeparator from="#0d0d0d" to="#121212" />
  <TestimonialsSection />
  <SectionSeparator from="#121212" to="#0a0a0a" />
  <FooterSection />
    </>
  )
}

export default App
