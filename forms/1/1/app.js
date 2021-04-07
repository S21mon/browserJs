// Добавьте пункт к выпадающему списку

const selectInput = document.querySelector('#genres');

let newOption = new Option('Классика', 'classic', false, true);

selectInput.append(newOption);