import React from "react";
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={style.imagegallery}>
      <ul className={style.imagediv}>
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
