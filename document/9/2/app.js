// Поместите мяч в центр поля

const field = document.getElementById('field');

const ball = document.querySelector('img');
let widthField = field.offsetWidth - 2 * field.clientLeft;
let heightField = field.offsetHeight - 2 * field.clientTop;

field.style.position = 'relative';
ball.style.cssText = `
    position: absolute;
    top: ${heightField / 2 - ball.clientHeight / 2}px;
    left: ${widthField / 2 - ball.clientWidth / 2}px;
`;