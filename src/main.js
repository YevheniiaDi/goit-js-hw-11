// import { fetchImages } from './js/pixabay-api'; 
// import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';  
// import iziToast from 'izitoast';  


// const form = document.querySelector('.form');  

// form.addEventListener('submit', async (event) => {  
//     event.preventDefault();  
    
//     const query = document.querySelector('input[name="search-text"]').value;  

//     clearGallery();   
//     showLoader();   

//     try {  
//         const response = await fetchImages(query); 
//         const images = response.hits;  

//         if (images.length > 0) {  
//             createGallery(images); 
//         } else {  
//             iziToast.error({  
//                 title: 'Error',  
//                 message: 'Sorry, there are no images matching your search query. Please try again.',  
//             });  
//         }  
//     } catch (error) {  
//         console.error('There was an error!', error);  
//         iziToast.error({  
//             title: 'Error',  
//             message: 'There was an error reaching the API. Please try again later.',  
//         });  
//     } finally {  
//         hideLoader();   
//     }  
// });  

import { getAllImages } from './js/pixabay-api';
import { imageTemplate, imagesTemplate } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};
let lightbox;

refs.form.addEventListener('submit', searchImages);

function searchImages(e) {
  e.preventDefault();
  showLoader();
  const massege = e.target.elements.search.value.trim();
  refs.gallery.innerHTML = '';
  getAllImages(massege)
    .then(arr => {
      if (arr.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FFFFFF',
          backgroundColor: '#B51B1B',
          position: 'topRight',
          messageSize: '16px',
          messageLineHeight: '24px',
          maxWidth: '432px',
        });

      } else {
        const markup = imagesTemplate(arr);
        refs.gallery.innerHTML = markup;

        if (lightbox) {
          lightbox.refresh();
        } else {
          lightbox = new SimpleLightbox('.gallery a');
        }
      }
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        position: 'topRight',
        messageSize: '16px',
        messageLineHeight: '24px',
        maxWidth: '432px',
      });
      console.log(error);
    })
    .finally(hideLoader);

  e.target.reset();
}

function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.gallery.classList.add('hidden');

}

function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.gallery.classList.remove('hidden');
}