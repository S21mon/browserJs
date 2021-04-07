// Сделайте внешние ссылки оранжевыми
const OUTER_LINK_PROPERTY = '://';
const NOT_UNCLUDED_STRING = 'http://internal.com';

const linksList = document.querySelectorAll('li');

for (let elements of linksList) {
    const link = elements.firstChild.getAttribute('href');
    const checkOnOuterLink = link.includes(OUTER_LINK_PROPERTY);
    const checkOnNotStartsWith = link.startsWith(NOT_UNCLUDED_STRING);

    if (checkOnOuterLink && !checkOnNotStartsWith) {
        elements.firstChild.style.color = 'orange';
    }
}