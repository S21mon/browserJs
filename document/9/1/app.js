// Найти размер прокрутки снизу

const elem = document.querySelector('div');

const scrollBottom = elem.scrollTop || elem.scrollHeight - elem.scrollTop !== elem.clientHeight ?
    elem.scrollHeight - elem.scrollTop - elem.clientHeight : 0;