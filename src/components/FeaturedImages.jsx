const FeaturedImages = () => {
  const featuredImages = [


    { id: 1, src: 'https://res.cloudinary.com/dqzlgkrrq/image/upload/v1752101362/IMG_4178_x183k1.jpg', title: 'Tradition' },
    {id: 2, src: 'https://res.cloudinary.com/dqzlgkrrq/image/upload/w_800,h_500,c_fill/v1751465729/2023-Porsche-911-GT3-R-Rennsport-005-1080_mmjwor.jpg', title: 'Golden Hour Magic'},
    { id: 3, src: 'https://res.cloudinary.com/dqzlgkrrq/image/upload/v1752101511/2K2A4151_polarr_pbzu7v.jpg', title: 'Bird Photography' }
  ];
  return (
    <section id="featured" className="featured-section">
      <h2 className="section-title">Featured Work</h2>
      <div className="featured-grid">
        <div className="featured-main">
          <img src={featuredImages[0].src} alt={featuredImages[0].title} />
          <h3>{featuredImages[0].title}</h3>
        </div>
        <div className="featured-secondary">
          {featuredImages.slice(1).map(image => (
            <div key={image.id} className="featured-item">
              <img src={image.src} alt={image.title} />
              <h4>{image.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedImages;
