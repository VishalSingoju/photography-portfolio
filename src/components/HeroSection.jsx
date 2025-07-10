const HeroSection = () => (
  <section id="home" className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">Every Story. One Shutter Click at a Time.</h1>
      <p className="hero-subtitle">More Than Photos — Stories You Can Feel.</p>
      <button
  className="cta-button"
  onClick={() => {
    const section = document.getElementById("featured");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Scroll Down!
</button>

    </div>
  </section>
);

export default HeroSection;
