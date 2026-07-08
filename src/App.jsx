import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyKIPE from './components/WhyKIPE';
import Programmes from './components/ProgrammesShowcase';
import UniversityPartners from './components/UniversityPartners';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyKIPE />
        <Programmes />
        <UniversityPartners />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
