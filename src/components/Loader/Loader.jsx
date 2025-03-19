import RingLoader from "react-spinners/RingLoader";
import style from "./Loader.module.css"; // Подключаем стили

const Loader = ({ loading }) => {
  return (
    <div className={style.loader}>
      {loading && <RingLoader size={80} color="#36d7b7" />}
    </div>
  );
};

export default Loader;
