// Бесконечная страница

window.addEventListener('scroll', showDate);

function showDate() {
    while (true) {
        if (document.documentElement.getBoundingClientRect().bottom > document.documentElement.clientHeight) {
            break;
        }
        let currentDate = new Date();
        let paragraph = document.createElement('p');
        paragraph.textContent = currentDate;
        document.body.append(paragraph);
    }
}

showDate();