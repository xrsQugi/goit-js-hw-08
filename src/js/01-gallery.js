import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    (acc += `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`),
  ""
);

galleryContainer.insertAdjacentHTML("beforeend", markup);

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
  });