// Создайте дерево из объекта

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

const container = document.getElementById('container');

function createTree(container, data) {
    container.innerHTML = getTreeElements(data);
}

function getTreeElements(data) {
    let list = '';
    let listElements = '';

    for (let elements in data) {
        listElements += '<li>' + elements + getTreeElements(data[elements]) + '</li>';
    }

    if (listElements) {
        list = '<ul>' + listElements + '</ul>';
    }
    return list;
}

createTree(container, data);