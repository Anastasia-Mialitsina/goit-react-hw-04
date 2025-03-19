import Modal from "react-modal";
import styles from "./ImageModal.module.css"; // Подключаем стили

Modal.setAppElement("#root"); // Указываем корневой элемент

const ImageModal = ({ isOpen, closeModal, imageUrl, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal} // Закрытие при клике вне окна или на ESC
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeBtn} onClick={closeModal}>
        ✖
      </button>
      <img src={imageUrl} alt={imageAlt} className={styles.image} />
    </Modal>
  );
};

export default ImageModal;
