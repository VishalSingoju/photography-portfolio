import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>© {new Date().getFullYear()} Vishal Singoju. All rights reserved.</div>
      <div style={{ marginTop: '0.5rem' }}>
  Made with 📸 & ❤️ at Hyderabad
</div>
    </footer>
  );
};

const footerStyle = {
  textAlign: 'center',
  padding: '1.5rem 0',
  color: '#4B4B4B',
  fontSize: '0.9rem',
  background: 'transparent',
  marginTop: '2rem',
  lineHeight: 1.6
};

export default Footer;
