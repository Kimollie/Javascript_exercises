'use strict';
const button = document.querySelector('button');

function buttonClick(evt) {
    alert('Button clicked!');
}

button.addEventListener('click',buttonClick);