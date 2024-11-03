import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderGallery(images) {
  const gallery = document.getElementById('gallary');
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largImageURL,
        tags,
        likes,
        views,
        comments,
        dowloads,
      }) => `<a href="${largeImageURL}" class="gallery-item">
          <img src="${webformatURL}" alt="${tags}" />
          <div class="info">
            <p>Likes: ${likes}</p>
            <p>Views: ${views}</p>
            <p>Comments: ${comments}</p>
            <p>Downloads: ${downloads}</p>
          </div>
        </a>`
    )
    .join('');
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

export function showLoader() {
  document.getElementById('loader').classList.remove('hidden');
}
export function hideLoader() {
  document.getElementById('loader').classList.add('hidden');
}

export function displayNoResultsMessage() {
  iziToast.info({
    title: 'No Results',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}
