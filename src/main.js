import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions.js';

const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = form.elements.query.value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  try {
    const data = await fetchImages(query);
    renderGallery(data.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    loader.classList.add('hidden');
  }
});
