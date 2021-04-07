// Выделяемый список

const list = document.querySelector('#ul');
const listElements = document.querySelectorAll('li');

list.addEventListener('click', function (event) {
    let element = event.target.closest('li');
    if (!element) {
        return false;
    }

    if (event.ctrlKey || event.metaKey) {
        element.classList.toggle('selected');
    } else {
        Array.from(listElements).forEach(item => item.classList.remove('selected'));
        element.classList.add('selected');
    }
});