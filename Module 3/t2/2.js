'use strict';
const list1 = document.createElement('li');
const list2 = document.createElement('li');
const list3 = document.createElement('li');

list1.innerHTML = "First item";
list2.innerHTML = "Second item";
list3.innerHTML = "Third item";

const ul = document.querySelector('#target');

ul.appendChild(list1);
ul.appendChild(list2);
ul.appendChild(list3);

list2.classList.add('my-item');
