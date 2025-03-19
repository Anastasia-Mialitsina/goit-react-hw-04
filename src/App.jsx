import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar"; // Импортируем компонент SearchBar
import ImageModal from "./components/ImageModal/ImageModal"; // Импортируем компонент ImageModal
import ImageGallery from "./components/ImageGallery/ImageGallery"; // Импортируем галерею изображений
import Loader from "./components/Loader/Loader"; // Импортируем индикатор загрузки
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"; // Импортируем компонент ошибки
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"; // Импортируем компонент Load More Button
import fetchImages from "./api/fetchImages"; // Функция для получения изображений

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия модального окна
  const [selectedImage, setSelectedImage] = useState(null); // Состояние для выбранного изображения
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getImages = async () => {
      if (!searchQuery) return;
      setLoading(true);
      console.log("Загрузка началась:", new Date().toISOString());
      
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await fetchImages(page);
        console.log("Загруженные данные:", data);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch {
        setError("Ошибка при загрузке изображений");
      } finally {
        setLoading(false);
         console.log("Загрузка завершена:", new Date().toISOString());
      }
    };

    getImages(); // Загружаем изображения при монтировании компонента
  }, [page, searchQuery]);

  const openModal = (imageUrl, imageAlt) => {
    setSelectedImage({ imageUrl, imageAlt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setPage(1); // Сбрасываем страницу при новом поиске
    setImages([]); // Очищаем старые изображения
    setLoading(true);
    setError(null); // Сбрасываем ошибку перед новым поиском
    try {
      const data = await fetchImages(query, 1);
      console.log(data.results);
      setImages(data.results);
    } catch (error) {
      console.error("Ошибка при поиске изображений", error);
      setError("Произошла ошибка при поиске изображений");
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />} 
      {error && <ErrorMessage message={error} />}
      {!loading && !error && images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {images.length > 0 && !loading && !error && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          imageUrl={selectedImage.imageUrl}
          imageAlt={selectedImage.imageAlt}
        />
      )}
    </div>
  );
};

export default App;
