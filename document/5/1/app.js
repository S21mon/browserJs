// Считаем потомков

const allListElements= document.querySelectorAll('li');

function getListChildrenQty(elements) {
    for (let element of elements) {
        const content = element.firstChild.textContent.trim();
        const childrenQty = element.getElementsByTagName('li').length;
        console.log(`${content}: ${childrenQty}`);
    }
}

getListChildrenQty(allListElements);