'use strict';
function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

let dice;
let i = 1
let dices = [];
while (dice !== 6) {
    dice = rollDice();
    dices.push(dice);
    document.querySelector('#target').innerHTML += `<li>Result of roll number ${i} : ${dice}</li>`;
    i++;
}
