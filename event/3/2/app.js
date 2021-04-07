// Раскрывающееся дерево

const tree = document.querySelector('.tree');

const listElements = document.querySelectorAll('li');
Array.from(listElements).forEach(item => {
    let textContent = document.createElement('span');
    textContent.append(item.firstChild);
    item.prepend(textContent);
});

tree.addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
        let children = event.target.parentNode.querySelector('ul');
        console.log(children);
        if (children) {
            children.hidden = !children.hidden;
        }
    }
});