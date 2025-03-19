import style from './ImageCard.module.css';

const ImageCard = ({ src, alt }) => {
  return (
    <div className={style.gallery}>
      <img src={src} alt={alt} className={style.image} />
    </div>
  );
};

export default ImageCard;


