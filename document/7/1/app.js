// Очистите элемент

const list = document.querySelector('ol');

function clear(elem) {
    while (elem.children.length) {
        elem.firstChild.remove();
    }
}

clear(list);