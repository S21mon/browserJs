// Слайдер

const slider = document.querySelector('.slider');
const sliderCoords = slider.getBoundingClientRect();

const thumb = document.querySelector('.thumb');
const thumbCoords = thumb.getBoundingClientRect();

thumb.ondragstart = function() {
    return false;
};

thumb.addEventListener('mousedown', function(event) {
    let shiftX = event.clientX - thumbCoords.left;

   // moveAt(event.pageX)

    // переносит мяч на координату (pageX),
    // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    /*function moveAt(pageX) {
        thumb.style.left = pageX - shiftX + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX);
    }*/

    function onMouseMove(event) {
        let newPosition = event.clientX - shiftX - sliderCoords.left;

        newPosition = newPosition < 0 ?
            0 : newPosition > sliderCoords.right ?
            slider.offsetWidth - thumb.offsetWidth : newPosition;

        thumb.style.left = newPosition + 'px';
    }

    function onMouseUp(event) {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
