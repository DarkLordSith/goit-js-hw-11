import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

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

  gallery.innerHTML = ''; // Очистка галереи перед новым запросом
  loader.classList.remove('hidden'); // Показать индикатор загрузки

  try {
    const data = await fetchImages(query);
    renderGallery(data.hits); // Передаем данные для отображения
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    loader.classList.add('hidden'); // Скрыть индикатор загрузки после завершения запроса
  }
});
