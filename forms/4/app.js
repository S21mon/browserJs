// Модальное диалоговое окно с формой

const overlay = document.querySelector('.overlay');
const showBtn = document.querySelector('button');
const form = document.querySelector('#prompt-form');
const message = document.querySelector('#prompt-message');

function showPrompt(content, func) {
    displayForm();
    message.innerHTML = content;
    form.text.focus();

    form.addEventListener('submit', function(event) {
        let data = form.text.value;

        if (data) {
            submitData(data, func);
        }

        event.preventDefault();
    });

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Escape') {
            hideForm();
        }
    })

    form.cancel.addEventListener('click', function(event) {
       hideForm();
    });

    let firstFormElement = form.elements[0];
    let lastFormElement = form.elements[form.elements.length - 1];

    firstFormElement.addEventListener('keydown', function(event) {
        if (event.code === 'Tab' && event.shiftKey) {
            event.preventDefault();
            lastFormElement.focus();
        }
    });

    lastFormElement.addEventListener('keydown', function(event) {
        if (event.code === 'Tab') {
            event.preventDefault();
            firstFormElement.focus();
        }
    });
}

function submitData(data, func) {
    hideForm();
    func(data);
}

showPrompt('lalala', function(result) {
    alert('Вы ввели:' + result);
});

function displayForm() {
    overlay.style.display = 'block';
    form.style.display = 'inline-block';
}

function hideForm() {
    overlay.style.display = 'none';
    form.style.display = 'none';
}
