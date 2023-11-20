'use strict';
function rollDice(side) {
    return Math.floor(Math.random() * side) + 1;
}
let side = parseInt(prompt("How many sides the die has?"))
let i = 1
let dice = 0;
let dices = [];
while (dice !== side) {
    dice = rollDice(side);
    dices.push(dice);
    document.querySelector('#target').innerHTML += `<li>Result of roll number ${i} : ${dice}</li>`;
    i++;
}
