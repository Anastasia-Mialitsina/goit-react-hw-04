// components/LoadMoreBtn/LoadMoreBtn.jsx

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "block",
        margin: "20px auto",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
