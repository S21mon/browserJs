// Вставьте HTML в список
const STRING_TO_INSERT = '<li>2</li><li>3</li>';

const listElements = document.querySelectorAll('li');

listElements[0].insertAdjacentHTML("afterend", STRING_TO_INSERT);