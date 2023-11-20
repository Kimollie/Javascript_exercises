'use strict';
let dogNames = []
for (let i = 1; i < 7; i++) {
    let name = prompt("Enter name of dog number "+ i);
    dogNames.push(name);
}
let sortedNames = dogNames.sort().reverse();
console.log(sortedNames);
for (const name of sortedNames) {
    document.querySelector("#target").innerHTML += `<li>${name}</li>`;
}