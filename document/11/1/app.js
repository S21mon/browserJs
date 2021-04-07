// Найдите координаты точек относительно окна браузера

const field = document.querySelector('#field');

let fieldCoords = field.getBoundingClientRect();

let pointX3 = (fieldCoords.width - field.clientWidth) / 2 + fieldCoords.left;
let pointY3 = (fieldCoords.height - field.clientHeight) / 2 + fieldCoords.top;

let pointX4 = fieldCoords.right - (fieldCoords.width - field.clientWidth) / 2;
let pointY4 = fieldCoords.bottom - (fieldCoords.height - field.clientHeight) / 2;

console.log(`Координаты первого угла: ${fieldCoords.left}, ${fieldCoords.top}`);
console.log(`Координаты второго угла: ${fieldCoords.right}, ${fieldCoords.bottom}`);
console.log(`Координаты третьего угла: ${pointX3}, ${pointY3}`);
console.log(`Координаты четвертого угла: ${pointX4}, ${pointY4}`);
