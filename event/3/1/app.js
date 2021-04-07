// Спрячьте сообщения с помощью делегирования

const messagesContainer = document.querySelector('#container');

messagesContainer.addEventListener('click', function(event) {
    if (!event.target.classList.contains('remove-button')) return;

    let element = event.target.parentNode;
    element.remove();
});