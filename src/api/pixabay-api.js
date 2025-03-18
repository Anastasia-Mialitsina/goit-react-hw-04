import axios from "axios";

const API_KEY = "5T5QvSakbyKs_C-p2REm5FHgLPRq5OgptIysWWYW2Hg"; 
const BASE_URL = "https://pixabay.com/api/";

export const fetchPixabayImages = async (query, page = 1, perPage = 12) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: perPage,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе к Pixabay API:", error);
    throw error;
  }
};
