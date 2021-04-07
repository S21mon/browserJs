// Галерея изображений

const mainPhoto = document.querySelector('p');

const gallery = document.querySelector('#thumbs');

gallery.addEventListener('click', function (event) {
    event.preventDefault();
    let target = event.target.closest('a');
    if (target) {
        mainPhoto.firstChild.src = target.href;
    }
});