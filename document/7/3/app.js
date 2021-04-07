// Выведите список потомков в дереве

const list = document.querySelectorAll('li');

function getChildrenQty(list) {
    for (let element of list) {
        const content = element.firstChild.textContent.trim();
        const childrenQty = element.getElementsByTagName('li').length;
        if (childrenQty) {
            element.firstChild.textContent = (`${content} [${childrenQty}]`);
        }
    }
}

getChildrenQty(list);
