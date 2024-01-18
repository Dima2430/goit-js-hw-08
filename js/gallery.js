const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector('.gallery');
function galleryTemplate(image) {
    return `<li class="gallery-item" data-source = "${image.original}">
  <a class="gallery-link" href="">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
      width="360px"
      height="200px"
    />
  </a>
</li>`
  
}
function galleryListTemplate(images) {
   const imagesList = images.map(galleryTemplate).join('');
    gallery.innerHTML = imagesList;
    
}
 galleryListTemplate(images);

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target === e.currentTarget) return;

  const galleryItem = e.target.closest('li');
    const url = galleryItem.dataset.source;
  const instance = basicLightbox.create(`
    <img
      class="gallery-image"
      src="${url}"
      alt="${url}"
      
    />
` ,{
    /*
     * Prevents the lightbox from closing when clicking its background.
     */
    closable: true,
    /*
     * One or more space separated classes to be added to the basicLightbox element.
     */
    className: '',
    /*
     * Function that gets executed before the lightbox will be shown.
     * Returning false will prevent the lightbox from showing.
     */
    onShow: (instance) => {
      window.addEventListener('keydown',closeModal)
    },
    /*
     * Function that gets executed before the lightbox closes.
     * Returning false will prevent the lightbox from closing.
     */
    onClose: (instance) => {
      window.removeEventListener('keydown',closeModal)
    }
})
function closeModal(e) {
  if (e.code === 'Escape') instance.close();
}
instance.show()
})



