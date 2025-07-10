// App.jsx
import React, { useEffect } from 'react';
import './index.css';

import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedImages from './components/FeaturedImages';
import MasonryGallery from './components/MasonryGallery';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import MobileNotice from './components/MobileNotice';

const App = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection />
      <FeaturedImages />
      <MasonryGallery />
      <AboutMe />
      <ContactForm />
      <ScrollToTop />
      <Footer />
      <div className="App">
        <MobileNotice />
        <GlobalStyles />
        <Navbar scrollToSection={scrollToSection} />
        ...
      </div>

    </div>
  );
};

export default App;
