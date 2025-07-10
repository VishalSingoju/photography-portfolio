import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen || !image) return null;

  return (
    <div className="fullscreen-modal" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>×</button>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.title} className="modal-image" />
        <div className="image-info">
          <h2>{image.title}</h2>
          <p>{image.caption}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
