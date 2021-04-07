// Дочерние элементы в DOM

// <html>
// <body>
// <div>Пользователи:</div>
// <ul>
//     <li>Джон</li>
//     <li>Пит</li>
// </ul>
// </body>
// </html>

const div = document.body.firstElementChild;
const ul = document.body.children[1];
const secondLi = ul.lastElementChild;

console.log(div, ul, secondLi);