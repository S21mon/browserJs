// Добавить кнопку закрытия

const buttons = document.querySelectorAll('.remove-button');

const messagesBlock = document.querySelectorAll('.pane');

Array.from(buttons).forEach(item => {
    item.addEventListener('click', function(event) {
        Array.from(messagesBlock).forEach(item => {
            if (item === event.target.parentNode) {
                item.remove();
            }
        });
    });
});
