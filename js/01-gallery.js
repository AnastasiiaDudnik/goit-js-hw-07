import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
);

gallery.innerHTML = markup.join("");

gallery.addEventListener("click", onImgClick);
let instance = "";

function onImgClick(event) {
  event.preventDefault();
  window.addEventListener("keydown", onEscapePress);
  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`);

  instance.show();
}

function onEscapePress(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onEscapePress);
  }
}
