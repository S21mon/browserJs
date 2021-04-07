// Редактирование TD по клику

const table = document.querySelector('#bagua-table');
let isChangingTd = false;

table.addEventListener('click', function (event) {
   let element = event.target.closest('td');
   if (!element) return;

   let textarea = document.createElement('textarea');
   textarea.value = element.innerHTML;
   textarea.classList.add('td', 'textarea');

   textarea.addEventListener('blur', function (event) {

       textarea.replaceWith(element);
       isChangingTd = !isChangingTd;
   });

   textarea.addEventListener('keydown', function (event) {
       if (event.code === 'Escape') {
           textarea.blur();
       } else if (event.code === 'Enter') {
           element.innerHTML = textarea.value;
           textarea.blur();
       }
   });

   if (!isChangingTd) {
       element.replaceWith(textarea);
       isChangingTd = !isChangingTd;
   }
});