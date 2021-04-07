// Редактируемый div

const block = document.querySelector('#view');

block.addEventListener('click', function(event) {
    let textarea = document.createElement('textarea');
    textarea.value = block.textContent;
    textarea.classList.add('edit');

    textarea.addEventListener('keydown', function(event) {
        if (event.code === 'Enter') {
            event.target.blur();
        }
    });

    textarea.addEventListener('blur', function(event) {
        block.innerHTML = textarea.value;
        textarea.replaceWith(block);
    });

    block.replaceWith(textarea);
});