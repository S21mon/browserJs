// Скрыть элемент по нажатию кнопки

const button = document.querySelector('input');
const textBlock = document.querySelector('div');

button.addEventListener('click', (event) => {
    console.log(event.type, event.target);
    textBlock.style.display = 'none';
});