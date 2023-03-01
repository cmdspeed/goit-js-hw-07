import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createGallery = galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img src="${preview}" data-source="${original}" alt="${description} " class="gallery__image"
                    />
                </a>
            </div>`;
    })
    .join('');

gallery.insertAdjacentHTML('beforeend', createGallery);
gallery.addEventListener('click', OrginalPhoto);

function OrginalPhoto(event) {
    event.preventDefault();
    const urlPhoto = event.target.dataset.source;
    if (urlPhoto) {
        const instance = basicLightbox.create(`
    <img src="${urlPhoto}" width="800" height="600">
`);
        instance.show();

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                instance.close();
            }
        });
    }
}