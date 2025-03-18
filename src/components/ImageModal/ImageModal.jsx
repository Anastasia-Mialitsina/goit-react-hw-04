// components/ImageModal/ImageModal.jsx
import React from "react";
import Modal from "react-modal";

// Настройка модального окна
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "0",
    border: "none",
  },
};

Modal.setAppElement("#root"); // Чтобы избежать предупреждений в React

const ImageModal = ({ isOpen, closeModal, imageUrl, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
      closeTimeoutMS={200}
    >
      <button
        onClick={closeModal}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "transparent",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        &times;
      </button>
      <img
        src={imageUrl}
        alt={imageAlt}
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "auto",
          borderRadius: "8px",
        }}
      />
    </Modal>
  );
};

export default ImageModal;
