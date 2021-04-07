// Создать раскрывающееся меню

const text = document.querySelector('p');

const list = document.querySelector('ul');
let isOpenedList = true;

text.addEventListener('click', function(event) {
    list.style.display = isOpenedList ? 'none' : '';
    isOpenedList = !isOpenedList;
});