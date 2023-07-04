//Obtain the featured picture and thumbnail images.
const featuredImg = document.querySelector('.displayed-img');
const thumbnails = document.querySelectorAll('.thumb-bar img');

//Add click event listeners to each thumbnail image
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
//Change the featured image's source and alt properties.
    featuredImg.src = thumbnail.src;
    featuredImg.alt = thumbnail.alt;
  });
});
