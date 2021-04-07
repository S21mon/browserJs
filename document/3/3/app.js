// Выделите ячейки по диагонали

let table = document.body.firstElementChild;
const tbody = table.firstElementChild;
const rowsQty = tbody.childElementCount;

for (let rowNumber = 0; rowNumber < rowsQty; rowNumber++) {
    tbody.children[rowNumber].children[rowNumber].style.backgroundColor = 'red';
}