import { ClipLoader } from "react-spinners";
import style from "./Loader.module.css"; // Создай стили, если нужно

const Loader = () => {
  return (
    <div className={style.loader}>
      <ClipLoader size={50} color="#36d7b7" />
    </div>
  );
};

export default Loader;
