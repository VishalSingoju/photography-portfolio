import { useEffect } from 'react';

const GlobalStyles = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Notable&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        scroll-behavior: smooth;
      }
      body {
        font-family: 'Inter', sans-serif;
        line-height: 1.6;
        color: #F5F5F5;
        background: linear-gradient(135deg, #F5F5F5 0%, #E5D9C5 100%);
        min-height: 100vh;
      }
      section {
        padding: 5rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.8s ease;
      }
      .hero-section {
      min-height: 200mh;
      min-width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 rem;
      background: url('https://res.cloudinary.com/dqzlgkrrq/image/upload/v1752101362/IMG_4178_x183k1.jpg') no-repeat center ;
      background-size: cover;
}
      footer {
  text-align: center;
  color: #4B4B4B;
  font-size: 0.9rem;
  padding: 1rem 0;
  margin-top: 2rem;
}


      section.fade-in {
        opacity: 1;
        transform: translateY(0);
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default GlobalStyles;
