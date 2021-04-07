// Кнопка вверх/вниз

const upArrow = document.body.querySelector('#arrowTop');
const startedWindowHeight = document.documentElement.clientHeight;

function displayUpArrow() {
    upArrow.style.display = document.documentElement.scrollTop > startedWindowHeight ? '' : 'none';
}

window.addEventListener('scroll', displayUpArrow);
displayUpArrow();

upArrow.addEventListener('click', function (event) {
    let arrow = event.target.closest('div');
    if (arrow) {
        window.scrollTo(0, 0);
    }
});