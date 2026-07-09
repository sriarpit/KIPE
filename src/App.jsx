import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutBrandShowcase from './components/AboutBrandShowcase';
import WhyKIPE from './components/WhyKIPE';
import Programmes from './components/Programmes';
import UniversityPartners from './components/UniversityShowcase';
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
        <AboutBrandShowcase />
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
