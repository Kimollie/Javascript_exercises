'use strict';
const form = document.querySelector('#source');
const fName = document.querySelector('input[name=firstname]');
const lName = document.querySelector('input[name=lastname]');
const p = document.querySelector('#target');

form.addEventListener('submit',function (evt) {
    evt.defaultPrevented;
    p.innerHTML = `Your name is ${fName} ${lName}`;
});