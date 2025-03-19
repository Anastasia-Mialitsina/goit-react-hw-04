import Modal from "react-modal";
import styles from "./ImageModal.module.css"; 

Modal.setAppElement("#root"); 

const ImageModal = ({ isOpen, closeModal, imageUrl, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal} 
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
