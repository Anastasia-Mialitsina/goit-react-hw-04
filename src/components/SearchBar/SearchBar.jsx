import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Введіть текст для пошуку!', { position: 'top-right' });
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button className={style.button} type="submit">
          Сlick me
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
