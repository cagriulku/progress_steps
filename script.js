// alert(123);
// console.log(31);

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', runEvent);
prev.addEventListener('click', runEventPrev);

function runEvent() {
    currentActive++;
    if (currentActive <= circles.length) {

        console.log(currentActive, circles.length);
        update()
    }
}
function runEventPrev() {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    } else {
        update()
    }
}

function update() {
    // circles.forEach((circle, idx) => {
    //     if (idx < currentActive) {
    //         circle.classList.add('active');
    //     } else {
    //         circle.classList.remove('active');
    //     }
    // })
    circles.forEach(a)
    function a(circle, index) {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    }

    const changeWidth = progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        prev.disabled = false;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

