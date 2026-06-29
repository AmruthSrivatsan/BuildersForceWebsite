import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Discover from './pages/Discover';
import Build from './pages/Build';
import Operate from './pages/Operate';
import Accelerators from './pages/Accelerators';
import WhatWeThink from './pages/WhatWeThink';
import CaseStudies from './pages/CaseStudies';
import WhoWeAre from './pages/WhoWeAre';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
      {/* Flashlight Halo Overlay */}
      <div 
        className="flashlight-halo" 
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 150, 136, 0.15) 0%, rgba(0, 150, 136, 0.05) 50%, transparent 100%)`
        }}
      />
      
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/build" element={<Build />} />
        <Route path="/operate" element={<Operate />} />
        <Route path="/accelerators" element={<Accelerators />} />
        <Route path="/what-we-think" element={<WhatWeThink />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
