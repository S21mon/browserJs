// Цветные часы с использованием setInterval

const DELAY_BEFORE_UPDATE = 1000;

const hoursTimer = document.querySelector('.hours');
const minutesTimer = document.querySelector('.minutes');
const secondTimer = document.querySelector('.seconds');

function setCurrentTime(hoursField, minutesField, secondsField) {
    let currentTime = new Date();
    hoursField.textContent = checkOnTwoNumbers(currentTime.getHours());
    minutesField.textContent = checkOnTwoNumbers(currentTime.getMinutes());
    secondsField.textContent = checkOnTwoNumbers(currentTime.getSeconds());
}

function checkOnTwoNumbers(number) {
    return number / 10 > 1 ? number : `0${number}`;
}

function startGame() {
    let timer = setInterval(() => setCurrentTime(hoursTimer, minutesTimer, secondTimer), DELAY_BEFORE_UPDATE);
    setCurrentTime(hoursTimer, minutesTimer, secondTimer);
}

startGame();
