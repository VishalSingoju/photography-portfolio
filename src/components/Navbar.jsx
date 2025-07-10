import { useState } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
         <img
  src="https://res.cloudinary.com/dqzlgkrrq/image/upload/v1752102926/logo_-_Edited_oqje5c.png"
  alt="Logo"
  style={{ height: '60px' }}/>
      </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
