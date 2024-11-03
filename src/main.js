import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showLoader,
  hideLoader,
  displayNoResultsMessage,
} from './js/render-functions.js';

let currentPage = 1;
const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();

  if (!query) return;

  currentPage = 1;
  gallery.innerHTML = '';
  showLoader();

  try {
    const data = await fetchImages(query, currentPage);

    if (data.hits.length === 0) {
      displayNoResultsMessage();
      return;
    }

    renderGallery(data.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    hideLoader();
  }
});
