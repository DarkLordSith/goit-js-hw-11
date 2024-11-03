import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = 'your_api_key';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 12) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch images');
    return await response.json();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images from Pixabay API',
    });
    throw error;
  }
}
