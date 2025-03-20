import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar"; 
import ImageModal from "./components/ImageModal/ImageModal"; 
import ImageGallery from "./components/ImageGallery/ImageGallery"; 
import Loader from "./components/Loader/Loader"; 
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"; 
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"; 
import fetchImages from "./api/fetchImages"; 

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null); 
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getImages = async () => {
      if (!searchQuery) return;
      setLoading(true);
      console.log("Загрузка началась:", new Date().toISOString());
      
      try {
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

    getImages(); 
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
    setPage(1); 
    setImages([]); 
    setLoading(true);
    setError(null); 
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
