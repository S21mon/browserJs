// Отследить одновременное нажатие

function runOnKeys(func, ...keysCodes) {
    let keys = [];
    document.addEventListener('keydown', function (event) {
        keys.push(event.code);

        for (let keyCode of keysCodes) {
            if (!keys.includes(keyCode)) return;
        }
        func();
        keys.length = 0;
    });
}


runOnKeys(
    () => alert("Привет!"),
    "KeyQ",
    "KeyW"
);
