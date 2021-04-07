// Спрятать себя

const button = document.querySelector('input');

button.addEventListener('click', (event) => {
    event.target.style.display = 'none';
})