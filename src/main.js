import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getAllImages } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', async e => {
  e.preventDefault();

  showLoader();

  const query = e.target.elements.search.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query.',
      messageColor: '#FFFFFF',
      backgroundColor: '#FFA000',
      position: 'topRight',
      messageSize: '16px',
      messageLineHeight: '24px',
      maxWidth: '432px',
    });
    hideLoader();
    return;
  }

  try {
    const images = await getAllImages(query);

    gallery.innerHTML = '';

    if (images.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        position: 'topRight',
        messageSize: '16px',
        messageLineHeight: '24px',
        maxWidth: '432px',
      });
      return;
    }

    createGallery(images);
    lightbox.refresh();

    // Вивід повідомлення про кількість зображень
    iziToast.success({
      message: `Hooray! We found ${images.length} images.`,
      messageColor: '#FFFFFF',
      backgroundColor: '#59A10D',
      position: 'topRight',
      messageSize: '16px',
      messageLineHeight: '24px',
      maxWidth: '432px',
    });

    form.reset();
  } catch (error) {
    iziToast.error({
      message: 'Oops! Something went wrong. Please try again later.',
      messageColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      position: 'topRight',
      messageSize: '16px',
      messageLineHeight: '24px',
      maxWidth: '432px',
    });
  } finally {
    hideLoader();
  }
});

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}
