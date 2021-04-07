// Покажите заметку рядом с элементом

function positionAt(anchor, position, elem) {
    const anchorCoords = anchor.getBoundingClientRect();
    anchor.style.position = 'relative';
    elem.style.position = 'absolute';

    switch (position) {
        case 'top':
            elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
            elem.style.left = anchorCoords.left + 'px';
            break;

        case 'bottom':
            elem.style.top = anchorCoords.bottom + 'px';
            elem.style.left = anchorCoords.left + 'px';
            break;

        case 'right':
            elem.style.top = anchorCoords.top + 'px';
            elem.style.left = anchorCoords.right + elem.offsetWidth + 'px';
            break;
    }
}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");