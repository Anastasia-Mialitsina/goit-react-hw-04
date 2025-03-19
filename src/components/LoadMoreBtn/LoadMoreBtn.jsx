import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button
      className={style.LoadMoreBtn}
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
