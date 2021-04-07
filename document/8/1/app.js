// Создать уведомление
const BLOCK_OPTIONS = {
    top: 10,
    right: 10,
    html: 'Hello!',
    className: 'welcome'
}

const DELAY_BEFORE_SHOW = 1500;

function showNotification(options) {
    let notification = document.createElement('div');
    notification.className ='notification'
    notification.innerText = options.html;
    notification.style.cssText = `
    position: absolute;
    top: ${options.top}px;
    right: ${options.right}px;
    `;
    notification.classList.add(options.className);
    document.body.append(notification);
}

setInterval(() => showNotification(BLOCK_OPTIONS), DELAY_BEFORE_SHOW);
//showNotification(BLOCK_OPTIONS);