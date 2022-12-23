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
const instance = basicLightbox.create(
  `
    <img src="">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscapePress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscapePress);
    },
  }
);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.modeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = event.target.dataset.source;

  instance.show();
}

function onEscapePress(event) {
  if (event.code === "Escape") {
    instance.close();
    return;
  }
}
