'use strict';

const p = document.querySelector('#trigger');
const img = document.querySelector('#target');

function changeImg(evt) {
    img.src = "img/picB.jpg";
}

function returnImg(evt) {
    img.src = "img/picA.jpg";
}

p.addEventListener('mouseenter',changeImg);
p.addEventListener('mouseleave',returnImg);