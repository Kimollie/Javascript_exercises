'use strict';
let num;
let numArr = [];
while (num !== 0) {
    num = parseInt(prompt("Enter number: "));
    numArr.push(num)
}
let sorted = numArr.sort().reverse();
for (const number of sorted) {
    console.log(number);
}