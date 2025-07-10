import React from 'react';
import ReactDOM from 'react-dom';
import './ImageModal.css';

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen || !image) return null;

  return ReactDOM.createPortal(
    <div className="image-modal" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>×</button>
      <img src={image.src} alt={image.title} className="modal-full-image" />
      <div className="image-description">
        <h2>{image.title}</h2>
        <p>{image.caption}</p>
      </div>
      <div className="image-modal" onClick={onClose}>
  <button className="modal-close" onClick={onClose}>×</button>
  <img src={image.src} alt={image.title} className="modal-image" />
  <div className="image-description">
    <h2>{image.title}</h2>
    <p>{image.caption}</p>
  </div>
</div>

    </div>,
    document.body
  );
};

export default ImageModal;
