import { useState } from 'react';
import ImageModal from './ImageModal';

const MasonryGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const galleryImages = [
    { id: 1, src: 'https://res.cloudinary.com/dqzlgkrrq/image/upload/v1752101362/IMG_4178_x183k1.jpg', title: 'Street Photography', caption: 'Urban life in motion' },
    { id: 2, src: '/api/placeholder/300/300', title: 'Nature', caption: 'Serenity in landscapes' }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-title">Gallery</h2>
      <div className="masonry-grid">
        {galleryImages.map(image => (
          <div key={image.id} className="masonry-item" onClick={() => openModal(image)}>
            <img src={image.src} alt={image.title} loading="lazy" />
            <div className="image-overlay">
              <h4>{image.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <ImageModal image={selectedImage} isOpen={modalOpen} onClose={closeModal} />
    </section>
  );
};

export default MasonryGallery;
