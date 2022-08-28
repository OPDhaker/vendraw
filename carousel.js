const container = document.querySelector('.header-slideshow');
let current = 2;
currentElement = null;
recentlyReset = false;
const clickHandler = (id, clicked = false) => {
    const element1 = document.getElementById('1');
    const element2 = document.getElementById('2');
    const element3 = document.getElementById('3');
    const element4 = document.getElementById('4');
    const element5 = document.getElementById('5');
    const element6 = document.getElementById('6');
    const element7 = document.getElementById('7');
    const element8 = document.getElementById('8');
    const element9 = document.getElementById('9');
    const element10 = document.getElementById('10');
    console.log(id);
    if (clicked) {
        recentlyReset = true;
    }
    id = Number(id)
    current = id;
    if (id === 1) {
        console.log("Id is equal to 1")
        element1.className = 'header-slideshow-slide header-slideshow-2';
        element2.className = 'header-slideshow-slide header-slideshow-3';

        element3.className = 'header-slideshow-slide header-slideshow-4';

        element4.className = 'header-slideshow-slide header-slideshow-5';

        element5.className = 'header-slideshow-slide header-slideshow-6';

        element6.className = 'header-slideshow-slide header-slideshow-7';

        element7.className = 'header-slideshow-slide header-slideshow-8';

        element8.className = 'header-slideshow-slide header-slideshow-9';

        element9.className = 'header-slideshow-slide header-slideshow-10';

        element10.className = 'header-slideshow-slide header-slideshow-1';
    } else if (id === 2) {
        element2.className = 'header-slideshow-slide header-slideshow-2';
        element1.className = 'header-slideshow-slide header-slideshow-1';

        element3.className = 'header-slideshow-slide header-slideshow-3';

        element4.className = 'header-slideshow-slide header-slideshow-4';

        element5.className = 'header-slideshow-slide header-slideshow-5';

        element6.className = 'header-slideshow-slide header-slideshow-6';

        element7.className = 'header-slideshow-slide header-slideshow-7';

        element8.className = 'header-slideshow-slide header-slideshow-8';

        element9.className = 'header-slideshow-slide header-slideshow-9';

        element10.className = 'header-slideshow-slide header-slideshow-10';
    } else if (id === 3) {
        element3.className = 'header-slideshow-slide header-slideshow-2';
        element1.className = 'header-slideshow-slide header-slideshow-10';

        element2.className = 'header-slideshow-slide header-slideshow-1';

        element4.className = 'header-slideshow-slide header-slideshow-3';

        element5.className = 'header-slideshow-slide header-slideshow-4';

        element6.className = 'header-slideshow-slide header-slideshow-5';

        element7.className = 'header-slideshow-slide header-slideshow-6';

        element8.className = 'header-slideshow-slide header-slideshow-7';

        element9.className = 'header-slideshow-slide header-slideshow-8';

        element10.className = 'header-slideshow-slide header-slideshow-9';
    } else if (id === 4) {
        element4.className = 'header-slideshow-slide header-slideshow-2';
        element1.className = 'header-slideshow-slide header-slideshow-9';

        element2.className = 'header-slideshow-slide header-slideshow-10';

        element3.className = 'header-slideshow-slide header-slideshow-1';

        element5.className = 'header-slideshow-slide header-slideshow-3';

        element6.className = 'header-slideshow-slide header-slideshow-4';

        element7.className = 'header-slideshow-slide header-slideshow-5';

        element8.className = 'header-slideshow-slide header-slideshow-6';

        element9.className = 'header-slideshow-slide header-slideshow-7';

        element10.className = 'header-slideshow-slide header-slideshow-8';
    } else if (id === 5) {
        element5.className = 'header-slideshow-slide header-slideshow-2';
        element1.className = 'header-slideshow-slide header-slideshow-8';

        element2.className = 'header-slideshow-slide header-slideshow-9';

        element3.className = 'header-slideshow-slide header-slideshow-10';

        element4.className = 'header-slideshow-slide header-slideshow-1';

        element6.className = 'header-slideshow-slide header-slideshow-3';

        element7.className = 'header-slideshow-slide header-slideshow-4';

        element8.className = 'header-slideshow-slide header-slideshow-5';

        element9.className = 'header-slideshow-slide header-slideshow-6';

        element10.className = 'header-slideshow-slide header-slideshow-7';
    } else if (id === 6) {
        element6.className = 'header-slideshow-slide header-slideshow-2';
        element1.className = 'header-slideshow-slide header-slideshow-7';

        element2.className = 'header-slideshow-slide header-slideshow-8';

        element3.className = 'header-slideshow-slide header-slideshow-9';

        element4.className = 'header-slideshow-slide header-slideshow-10';

        element5.className = 'header-slideshow-slide header-slideshow-1';

        element7.className = 'header-slideshow-slide header-slideshow-3';

        element8.className = 'header-slideshow-slide header-slideshow-4';

        element9.className = 'header-slideshow-slide header-slideshow-5';

        element10.className = 'header-slideshow-slide header-slideshow-6';
    } else if (id === 7) {
        element7.className = 'header-slideshow-slide header-slideshow-2';
        element1.className = 'header-slideshow-slide header-slideshow-6';

        element2.className = 'header-slideshow-slide header-slideshow-7';

        element3.className = 'header-slideshow-slide header-slideshow-8';

        element4.className = 'header-slideshow-slide header-slideshow-9';

        element5.className = 'header-slideshow-slide header-slideshow-10';

        element6.className = 'header-slideshow-slide header-slideshow-1';

        element8.className = 'header-slideshow-slide header-slideshow-3';

        element9.className = 'header-slideshow-slide header-slideshow-4';

        element10.className = 'header-slideshow-slide header-slideshow-5';
    } else if (id === 8) {
        element8.className = 'header-slideshow-slide header-slideshow-2';
        element1.className = 'header-slideshow-slide header-slideshow-5';

        element2.className = 'header-slideshow-slide header-slideshow-6';

        element3.className = 'header-slideshow-slide header-slideshow-7';

        element4.className = 'header-slideshow-slide header-slideshow-8';

        element5.className = 'header-slideshow-slide header-slideshow-9';

        element6.className = 'header-slideshow-slide header-slideshow-10';

        element7.className = 'header-slideshow-slide header-slideshow-1';

        element9.className = 'header-slideshow-slide header-slideshow-3';

        element10.className = 'header-slideshow-slide header-slideshow-4';
    } else if (id === 9) {
        element9.className = 'header-slideshow-slide header-slideshow-2';
        element1.className = 'header-slideshow-slide header-slideshow-4';

        element2.className = 'header-slideshow-slide header-slideshow-5';

        element3.className = 'header-slideshow-slide header-slideshow-6';

        element4.className = 'header-slideshow-slide header-slideshow-7';

        element5.className = 'header-slideshow-slide header-slideshow-8';

        element6.className = 'header-slideshow-slide header-slideshow-9';

        element7.className = 'header-slideshow-slide header-slideshow-10';

        element8.className = 'header-slideshow-slide header-slideshow-1';

        element10.className = 'header-slideshow-slide header-slideshow-3';
    } else if (id === 10) {
        element10.className = 'header-slideshow-slide header-slideshow-2';
        element1.className = 'header-slideshow-slide header-slideshow-3';

        element2.className = 'header-slideshow-slide header-slideshow-4';

        element3.className = 'header-slideshow-slide header-slideshow-5';

        element4.className = 'header-slideshow-slide header-slideshow-6';

        element5.className = 'header-slideshow-slide header-slideshow-7';

        element6.className = 'header-slideshow-slide header-slideshow-8';

        element7.className = 'header-slideshow-slide header-slideshow-9';

        element8.className = 'header-slideshow-slide header-slideshow-10';

        element9.className = 'header-slideshow-slide header-slideshow-1';
    }

}

setInterval((() => {
    if (recentlyReset) {
        recentlyReset = false
    } else if (current === 10) {

        clickHandler(1);
    } else {

        clickHandler(current + 1);
    }
}), 1000)

const individualSlide = (info) => {
    const e = document.createElement('div');
    e.innerHTML = `<img src=${info.src} alt=${info.alt}>`
    e.className = `header-slideshow-${info.id} header-slideshow-slide`;
    e.id = info.id;
    // e.classList.push('header-slideshow-slide');
    e.style = 'position:absolute; transition: all 0.2s'
    // e.onclick = clickHandler;
    e.addEventListener('click', clickHandler.bind(this, info.id, true));
    container.appendChild(e);
    currentElement = e;
}


individualSlide({
    src: 'img/hero/1.png',
    alt: 'image 1',
    id: '1'
})
individualSlide({
    src: 'img/hero/2.png',
    alt: 'image 1',
    id: '2'
});
individualSlide({
    src: 'img/hero/3.png',
    alt: 'image 1',
    id: '3'
});
individualSlide({
    src: 'img/hero/4.png',
    alt: 'image 1',
    id: '4'
});
individualSlide({
    src: 'img/hero/6.png',
    alt: 'image 1',
    id: '5'
})
individualSlide({
    src: 'img/hero/5.png',
    alt: 'image 1',
    id: '6'
});
individualSlide({
    src: 'img/hero/7.png',
    alt: 'image 1',
    id: '7'
});
individualSlide({
    src: 'img/hero/8.png',
    alt: 'image 1',
    id: '8'
});
individualSlide({
    src: 'img/hero/9.png',
    alt: 'image 1',
    id: '9'
});
individualSlide({
    src: 'img/hero/10.png',
    alt: 'image 1',
    id: '10'
});