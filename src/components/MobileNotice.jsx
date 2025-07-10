import React, { useState, useEffect } from 'react';

const MobileNotice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div style={noticeStyle}>
      📱 For the best experience, please view this site on a desktop.
    </div>
  );
};

const noticeStyle = {
  background: '#8C5831',
  color: 'white',
  textAlign: 'center',
  padding: '0.8rem',
  fontSize: '0.95rem',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 9999,
  fontWeight: '500',
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
};

export default MobileNotice;
