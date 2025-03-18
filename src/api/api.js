const API_KEY = "5T5QvSakbyKs_C-p2REm5FHgLPRq5OgptIysWWYW2Hg";
const BASE_URL = "https://api.unsplash.com/search/photos";

const fetchImages = async (query) => {
  const response = await fetch(
    `${BASE_URL}?query=${query}&client_id=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Ошибка при загрузке изображений");
  }
  return await response.json();
};

export default fetchImages;
