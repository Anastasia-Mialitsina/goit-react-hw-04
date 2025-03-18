// components/ImageGallery/ImageGallery.jsx
import React from "react";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul>
        {images.map((image) => (
          <li
            key={image.id}
            onClick={() => onImageClick(image.urls.full, image.alt_description)}
          >
            <img src={image.urls.small} alt={image.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
