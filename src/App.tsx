import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Shop from './components/Shop';
import HealthBenefits from './components/HealthBenefits';
import GrowingProcess from './components/GrowingProcess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialProof from './components/SocialProof';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyUs />
      <Shop />
      <HealthBenefits />
      <GrowingProcess />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
      <SocialProof />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;