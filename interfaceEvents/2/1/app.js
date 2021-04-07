// Улучшенная подсказка

const house = document.querySelector('#house');
let prompt = null;

document.addEventListener('mouseover', function (event) {
   let element = event.target.closest('[data-tooltip]');
   if (element) {
       prompt = displayPrompt(element, element.dataset.tooltip);
   }
});

document.addEventListener('mouseout', function (event) {
   if (prompt) {
       prompt.remove();
       prompt = null;
   }
});

function displayPrompt(parentElement, content) {
    let promptElement = document.createElement('div');
    promptElement.className = 'tooltip';
    promptElement.textContent = content;
    house.append(promptElement);

    let parentElementCoords = parentElement.getBoundingClientRect();
    parentElement.style.position = 'relative';

    promptElement.style.position = 'absolute';
    promptElement.style.top = parentElementCoords.top - promptElement.offsetHeight + 'px';

    return promptElement;
}