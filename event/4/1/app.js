// Поймайте переход по ссылке

const contentsContainer = document.querySelector('#contents');

contentsContainer.addEventListener('click', function (event) {
   let target = event.target.closest('a');

   if (target) {
       let answer = confirm('Вы действительно хотите перейти на другую страницу?');
       if (!answer) {
           event.preventDefault();
       }
   }
});